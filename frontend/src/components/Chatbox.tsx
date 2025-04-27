import { useState } from "react";

const Chatbox = () => {
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="col-span-3 mt-4 rounded-tl-4xl animate-gradient bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 w-full h-screen relative">
      {/* Glass background */}
      <div className="absolute inset-0 bg-slate-300/60 backdrop-blur-xl backdrop-saturate-100 backdrop-contrast-100 bg-blend-overlay rounded-tl-4xl m-1" />

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-center p-4">
        {/* Room Name */}
        <div className="flex items-center">
          <div className="text-white text-3xl font-extralight">|</div>
          <div className="text-white text-xl">Room Name</div>
        </div>

        {/* Top-right actions */}
        <div className="flex items-center space-x-4">
          {/* Invite */}
          <div className="group flex items-center space-x-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white group-hover:text-pink-300 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9l-6 6-6-6"
              />
            </svg>
            <span className="opacity-0 group-hover:opacity-100 text-white transition text-sm">
              Invite
            </span>
          </div>

          {/* Three Dot Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v.01M12 12v.01M12 18v.01"
                />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-20 overflow-hidden">
                <button className="w-full text-red-500 hover:bg-red-100 px-4 py-2 text-left flex items-center">
                  {/* Leave Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10 19l-7-7 7-7v14zM14 5v14h6V5h-6z" />
                  </svg>
                  Leave Room
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col justify-end h-[85%] p-4 space-y-2 overflow-y-auto">
        {/* Messages would go here */}
      </div>

      {/* Bottom Chat Input */}
      <div className="flex items-center p-4 space-x-4 bg-white/20 backdrop-blur-md rounded-b-2xl absolute bottom-0 w-full z-10">
        {/* More Options "+" */}
        <div className="relative">
          <button
            onClick={() => setMoreOptionsOpen(!moreOptionsOpen)}
            className="text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
          >
            +
          </button>
          {moreOptionsOpen && (
            <div className="absolute bottom-12 left-0 bg-white text-black rounded-md shadow-md w-40 overflow-hidden">
              <div className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                Send Image
              </div>
              <div className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                Send Video
              </div>
              <div className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                Send Audio
              </div>
              <div className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                Send PDF
              </div>
            </div>
          )}
        </div>

        {/* Text Input */}
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-full outline-none bg-white/30 text-white placeholder-white/70"
        />

        {/* Send Button */}
        <button className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
