import { useState } from "react";
import useRoomStore from "../store/useRoomStore";
import InviteIcon from "../utils/InviteIcon";
import MenuIcon from "../utils/MenuIcon";
import LeaveRoomIcon from "../utils/LeaveRoomIcon";

const Chatbox = () => {
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedRoom = useRoomStore((state) => state.selectedRoom);
  return (
    <div className="col-span-10 min-h-screen rounded-tl-4xl animate-gradient bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 w-full relative">
      {/* Glass background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl backdrop-saturate-100 backdrop-contrast-100 bg-blend-overlay rounded-tl-4xl m-1" />

      {/* Top Bar */}
      <div className="bg-slate-200/30 rounded-tl-4xl shadow-sm backdrop-blur-3xl backdrop-saturate-150 backdrop-contrast-125 bg-blend-overlay flex justify-between items-center px-8 py-4">
        <div className="text-white flex items-center">
          <div className="text-md md:text-xl border-l-white border-l-1 pl-2">
            {selectedRoom
              ? selectedRoom.roomName
              : "Select a room to start messaging"}
          </div>
        </div>{" "}
        {/* Top-right actions */}
        <div className="flex items-center space-x-2">
          <div className="group flex items-center space-x-2 cursor-pointer">
            <span className="opacity-0 group-hover:opacity-100 text-white transition text-sm">
              Invite
            </span>
            <InviteIcon />
          </div>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white bg-white/0 cursor-pointer p-1 rounded-full hover:bg-white/30"
            >
              <MenuIcon />{" "}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-20 overflow-hidden">
                <button className="w-full text-red-500 hover:bg-red-100 text-xs px-4 py-2 flex items-center">
                  <LeaveRoomIcon />
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
