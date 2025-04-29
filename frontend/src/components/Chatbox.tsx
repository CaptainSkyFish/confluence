import { useState } from "react";
import useRoomStore from "../store/useRoomStore";
import InviteIcon from "../utils/InviteIcon";
import MenuIcon from "../utils/MenuIcon";
import LeaveRoomIcon from "../utils/LeaveRoomIcon";
import ChatInput from "./ChatInput";

const Chatbox = () => {
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedRoom = useRoomStore((state) => state.selectedRoom);
  return (
    <div className="col-span-9 md:col-span-10 min-h-full relative min-w-full bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] animate-gradient opacity-90 rounded-tl-4xl overflow-hidden flex flex-col">
      {/* Glass Background Overlay */}
      <div className="absolute bg-slate-800/60 min-h-full min-w-full ml-1 backdrop-blur-xl backdrop-saturate-150 backdrop-contrast-120 bg-blend-overlay rounded-tl-4xl" />

      {/* Top Bar */}
      <div className="z-10 px-6 py-3 md:px-8 md:py-4 bg-[#111928]/75 border-[#ffffff20] border-b-1 backdrop-blur-lg backdrop-saturate-180 backdrop-contrast-125 bg-blend-overlay flex justify-between items-center">
        <div className="text-white flex items-center">
          <div className="md:text-lg text-sm border-l-white border-l pl-2">
            {selectedRoom ? (
              selectedRoom.roomName
            ) : (
              <div className="text-white/40">
                {" "}
                Select a room to start messaging{" "}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="group flex items-center space-x-2 cursor-pointer">
            <span className="opacity-0 group-hover:opacity-70 text-white transition text-sm">
              Invite
            </span>
            <InviteIcon />
          </div>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white bg-white/0 cursor-pointer p-1 rounded-full shadow-lg hover:bg-white/30"
            >
              <MenuIcon />
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
      <div className="grow z-10 p-4 space-y-2 overflow-y-auto">
        {/* Messages will go here */}
      </div>

      {/* Bottom Chat Input */}
      <ChatInput />
    </div>
  );
};

export default Chatbox;
