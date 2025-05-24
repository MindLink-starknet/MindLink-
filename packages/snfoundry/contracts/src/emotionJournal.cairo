use starknet::ContractAddress;
use starknet::get_caller_address;
use starknet::get_contract_address;
use openzeppelin_access::ownable::OwnableComponent;
use openzeppelin_token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};
use starknet::storage::{
    Map, StorageMapReadAccess, StorageMapWriteAccess, StoragePointerReadAccess,
    StoragePointerWriteAccess,
};

#[starknet::interface]
trait IEmotionJournal<TContractState> {
    fn get_emotion(self: @TContractState, emotion_hash: felt252) -> ByteArray;
    fn record_emotion(ref self: TContractState, emotion: ByteArray, emotion_hash: felt252, amount_strk: Option<u256>);
    fn withdraw(ref self: TContractState);
    fn premium(self: @TContractState) -> bool;
    fn get_emotion_count(self: @TContractState) -> u256;
    fn get_user_emotion_count(self: @TContractState, user: ContractAddress) -> u256;
}

#[starknet::contract]
mod EmotionJournal {
    use super::IEmotionJournal;
    use super::ContractAddress;
    use super::get_caller_address;
    use super::get_contract_address;
    use super::OwnableComponent;
    use super::IERC20Dispatcher;
    use super::IERC20DispatcherTrait;
    use super::Map;
    use super::StorageMapReadAccess;
    use super::StorageMapWriteAccess;
    use super::StoragePointerReadAccess;
    use super::StoragePointerWriteAccess;

    component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    #[abi(embed_v0)]
    impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;
    impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;

    pub const FELT_STRK_CONTRACT: felt252 =
        0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d;

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        OwnableEvent: OwnableComponent::Event,
        EmotionRecorded: EmotionRecorded,
    }

    #[derive(Drop, starknet::Event)]
    struct EmotionRecorded {
        #[key]
        user: ContractAddress,
        #[key]
        emotion_hash: felt252,
        premium: bool,
        value: Option<u256>,
    }

    #[storage]
    struct Storage {
        emotions: Map<felt252, ByteArray>,
        premium: bool,
        total_counter: u256,
        user_emotion_counter: Map<ContractAddress, u256>,
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
    }

    #[constructor]
    fn constructor(ref self: ContractState, owner: ContractAddress) {
        self.ownable.initializer(owner);
        self.total_counter.write(0);
        self.premium.write(false);
    }

    #[abi(embed_v0)]
    impl EmotionJournalImpl of IEmotionJournal<ContractState> {
        fn get_emotion(self: @ContractState, emotion_hash: felt252) -> ByteArray {
            self.emotions.read(emotion_hash)
        }

        fn record_emotion(
            ref self: ContractState, 
            emotion: ByteArray, 
            emotion_hash: felt252,
            amount_strk: Option<u256>,
        ) {
            // Store the emotion with its hash
            self.emotions.write(emotion_hash, emotion);
            
            // Update counters
            let current_total = self.total_counter.read();
            self.total_counter.write(current_total + 1);
            
            let user_counter = self.user_emotion_counter.read(get_caller_address());
            self.user_emotion_counter.write(get_caller_address(), user_counter + 1);

            // Handle premium status
            match amount_strk {
                Option::Some(amount) => {
                    if amount > 0 {
                        let strk_contract_address: ContractAddress = FELT_STRK_CONTRACT
                            .try_into()
                            .unwrap();
                        let strk_dispatcher = IERC20Dispatcher {
                            contract_address: strk_contract_address,
                        };
                        
                        // Check if user has approved enough STRK
                        let allowance = strk_dispatcher.allowance(get_caller_address(), get_contract_address());
                        assert(allowance >= amount, 'Insufficient STRK allowance');
                        
                        // Check if user has enough STRK
                        let balance = strk_dispatcher.balance_of(get_caller_address());
                        assert(balance >= amount, 'Insufficient STRK balance');
                        
                        // Transfer STRK
                        strk_dispatcher.transfer_from(get_caller_address(), get_contract_address(), amount);
                        self.premium.write(true);
                    } else {
                        self.premium.write(false);
                    }
                },
                Option::None => { 
                    self.premium.write(false); 
                },
            }

            // Emit event with safe value handling
            let event_value = match amount_strk {
                Option::Some(amount) => Option::Some(amount),
                Option::None => Option::None,
            };

            self.emit(
                EmotionRecorded {
                    user: get_caller_address(),
                    emotion_hash: emotion_hash,
                    premium: self.premium.read(),
                    value: event_value,
                },
            );
        }

        fn withdraw(ref self: ContractState) {
            self.ownable.assert_only_owner();
            let strk_contract_address = FELT_STRK_CONTRACT.try_into().unwrap();
            let strk_dispatcher = IERC20Dispatcher { contract_address: strk_contract_address };
            let balance = strk_dispatcher.balance_of(get_contract_address());
            if balance > 0 {
                strk_dispatcher.transfer(self.ownable.owner(), balance);
            }
        }

        fn premium(self: @ContractState) -> bool {
            self.premium.read()
        }

        fn get_emotion_count(self: @ContractState) -> u256 {
            self.total_counter.read()
        }

        fn get_user_emotion_count(self: @ContractState, user: ContractAddress) -> u256 {
            self.user_emotion_counter.read(user)
        }
    }
} 