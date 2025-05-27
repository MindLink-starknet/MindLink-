const JournalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-6xl mx-auto py-16 px-4 flex gap-8">
        {/* Left Side - Journal Entry */}
        <div className="flex-grow bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#E6D5E6] to-[#9CE0DB] p-6">
            <div className="flex items-center gap-3 mb-4">
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
          
          <div className="p-6">
            <textarea
              className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CE0DB] resize-none"
              placeholder="Write about your emotions, thoughts, or how your day has been..."
            ></textarea>
            <div className="mt-2 text-gray-500">
              <span>0 words</span>
            </div>
            <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#81638B] to-[#5DC1B9] text-white rounded-xl font-medium flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Record entry
            </button>
            <div className="mt-4 text-center">
              <p className="text-gray-500">Connect your wallet to record entries</p>
            </div>
          </div>
        </div>

        {/* Right Side - Progress */}
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
        </div>
      </div>
    </div>
  );
};

export default JournalPage; 