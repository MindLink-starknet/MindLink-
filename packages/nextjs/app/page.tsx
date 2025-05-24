import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[70vh] w-full bg-gradient-to-r from-[#F5EFF5] via-[#E6D5E6] to-[#9CE0DB] flex flex-col items-center justify-center px-4">
        {/* Private & Decentralized Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#7B6B8D] bg-[#7B6B8D]/20 text-[#7B6B8D] backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-[#7B6B8D]">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium">Private & Decentralized</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#81638B] to-[#5DC1B9] text-transparent bg-clip-text">
            MindLink
          </h1>
          
          <h2 className="text-lg mb-3 text-[#4B5563] font-inter">
            Your private, decentralized emotional journal.
          </h2>
          
          <p className="text-lg text-[#374151] font-inter mb-6">
            Record your emotions, analyze them on your device, and store them privately on Starknet. Only you know what you write.
          </p>
        </div>
      </div>

      {/* Journal Section with White Background */}
      <div className="bg-white py-16">
        <div className="w-full max-w-6xl mx-auto px-4 flex gap-8">
          {/* Left Side - Journal Entry and History */}
          <div className="flex-grow space-y-6">
            {/* Journal Entry Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#E6D5E6] to-[#9CE0DB] p-4">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-[#81638B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19L19 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-2xl font-semibold text-[#81638B]">How do you feel today?</h2>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full">
                  <span className="text-sm text-[#81638B]">Local analysis</span>
                </div>
              </div>
              
              <div className="p-4">
                <textarea
                  className="w-full h-28 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CE0DB] resize-none bg-white"
                  placeholder="Write about your emotions, thoughts, or how your day has been..."
                ></textarea>
                <div className="mt-2 text-gray-500">
                  <span>0 words</span>
                </div>
                <button className="w-full mt-3 py-2.5 bg-gradient-to-r from-[#81638B] to-[#5DC1B9] text-white rounded-xl font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Record entry
                </button>
                <div className="mt-3 text-center">
                  <p className="text-gray-500">Connect your wallet to record entries</p>
                </div>
              </div>
            </div>

            {/* Emotional History Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-[#81638B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-xl font-semibold text-[#81638B]">Emotional History</h3>
              </div>
              <div className="text-center py-8">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-gray-500">You haven't recorded any emotions yet</p>
                <p className="text-gray-400 text-sm">Start today to unlock rewards</p>
              </div>
            </div>
          </div>

          {/* Right Side - Progress and Reminders */}
          <div className="w-80 space-y-6">
            <div className="bg-[#FFF9E5] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-[#81638B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L16 11L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-xl font-semibold text-[#81638B]">Streak & Progress</h3>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-[#81638B]">0 days</div>
                <div className="text-gray-500">Current streak</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress towards NFT</span>
                  <span className="text-gray-600">0/12</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-[#81638B] to-[#5DC1B9]"></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-xl text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-[#81638B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12L12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-sm text-gray-600">You're 12 days away from unlocking your wellness NFT!</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#81638B]">0</div>
                  <div className="text-sm text-gray-500">Best streak</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#81638B]">0</div>
                  <div className="text-sm text-gray-500">Weeks</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#81638B]">0</div>
                  <div className="text-sm text-gray-500">Status</div>
                </div>
              </div>
            </div>

            {/* Reminders Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-[#81638B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H14V4.18C16.579 4.793 18 7.038 18 10.5V16L20 17V19ZM12 5.75C9.67 5.75 8 7.419 8 10.5V17H16V10.5C16 7.419 14.33 5.75 12 5.75Z" fill="currentColor"/>
                </svg>
                <h3 className="text-xl font-semibold text-[#81638B]">Reminders</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Want us to remind you to write your emotion every day?</p>
              <button className="w-full py-2 bg-gradient-to-r from-[#81638B] to-[#5DC1B9] text-white rounded-xl font-medium text-sm">
                Enable notifications
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-r from-[#E6D5E6] to-[#9CE0DB] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-[#81638B] mb-4">How It Works?</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Your privacy is our priority. This is how we protect your emotions while analyzing them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#81638B] rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-[#81638B] mb-4">Write your emotion</h3>
              <p className="text-gray-600">
                Your text is analyzed locally on your device. It never leaves your browser.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5DC1B9] rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-[#5DC1B9] mb-4">Generate a hash</h3>
              <p className="text-gray-600">
                We only send a cryptographic hash of your emotion, not the original text.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#81638B] rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-[#81638B] mb-4">Sign with your wallet</h3>
              <p className="text-gray-600">
                Your wallet signs the hash and records it on Starknet privately and verifiably.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-[#81638B] text-center mb-16">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 100% Private */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#81638B]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#81638B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#81638B] mb-4">100% Private</h3>
              <p className="text-gray-600">
                Your text never leaves your device. We only record cryptographic hashes.
              </p>
            </div>

            {/* Local Analysis */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#5DC1B9]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#5DC1B9]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#5DC1B9] mb-4">Local Analysis</h3>
              <p className="text-gray-600">
                AI that analyzes your emotions directly in your browser, without sending data.
              </p>
            </div>

            {/* NFT Rewards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#81638B]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#81638B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12L12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#81638B] mb-4">NFT Rewards</h3>
              <p className="text-gray-600">
                Maintain a streak and unlock unique emotional wellness NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
