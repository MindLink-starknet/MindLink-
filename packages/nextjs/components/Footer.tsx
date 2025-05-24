import { Cog8ToothIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useTargetNetwork } from "~~/hooks/scaffold-stark/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";
import { devnet, sepolia, mainnet } from "@starknet-react/chains";
import { Faucet } from "~~/components/scaffold-stark/Faucet";
import { FaucetSepolia } from "~~/components/scaffold-stark/FaucetSepolia";
import { BlockExplorerSepolia } from "./scaffold-stark/BlockExplorerSepolia";
import { BlockExplorer } from "./scaffold-stark/BlockExplorer";
import Link from "next/link";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(
    (state) => state.nativeCurrencyPrice,
  );
  const { targetNetwork } = useTargetNetwork();

  // NOTE: workaround - check by name also since in starknet react devnet and sepolia has the same chainId
  const isLocalNetwork =
    targetNetwork.id === devnet.id && targetNetwork.network === devnet.network;
  const isSepoliaNetwork =
    targetNetwork.id === sepolia.id &&
    targetNetwork.network === sepolia.network;
  const isMainnetNetwork =
    targetNetwork.id === mainnet.id &&
    targetNetwork.network === mainnet.network;

  return (
    <div className="min-h-0 py-12 px-4 bg-[#81638B] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <img src="/mindlink-logo.png" alt="MindLink Logo" className="w-12 h-12" />
            </div>
            <p className="text-lg">
              Your private and decentralized emotional journal on Starknet.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#9CE0DB]">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="hover:text-[#9CE0DB]">How It Works?</Link></li>
              <li><Link href="/journal" className="hover:text-[#9CE0DB]">Full Journal</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#9CE0DB]">Dashboard</Link></li>
            </ul>
          </div>

          {/* Technology Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#9CE0DB]">Technology</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-[#9CE0DB]">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.starknet.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#9CE0DB]">
                  Starknet
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <hr className="border-white/20 mb-8" />
          <p>© 2025 MindLink. Built with privacy by design.</p>
        </div>
      </div>
    </div>
  );
};
