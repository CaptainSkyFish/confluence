import { useState } from "react";
import SendIcon from "../utils/SendIcon";
import AttachmentsIcon from "../utils/AttachmentsIcon";

export default function ChatInput() {
  const [focused, setFocused] = useState(false);


  return (
    <div className="w-full mb-22 px-4 py-2 bg-transparent">
      <div
        className={`flex items-center backdrop-blur-md backdrop-saturate-150 outline-white/50 bg-slate-500/40 transition-all duration-300 rounded-full px-4 py-2 ${
          focused ? "w-3/5" : "w-1/3"
        } mx-auto`}
      >
        {focused && (
          <button className="mr-2 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
            <AttachmentsIcon />
          </button>
        )}

        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow bg-transparent text-wrap text-white placeholder-white/60 outline-none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <button className="ml-2 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
