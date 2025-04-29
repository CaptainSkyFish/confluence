import { Link } from "react-router-dom";
import Chatbox from "../components/Chatbox";
import Sidebar from "../components/Sidebar";

const Inbox = () => {
  return (
    <div className="fixed inset-0 bg-[#0f0f0f] backdrop-blur-3xl">
      <div className="col-span-1 mx-2 h-screen w-full text-slate-100">
        <div className="flex justify-between items-center">
          <div className="">
            <Link
              to="/"
              className="font-extrabold fade-up font-casselin text-3xl bg-gradient-to-r from-[#9796F0] to-[#FBC7D4] bg-clip-text text-transparent"
            >
              Confluence
            </Link>
          </div>
          <div className="flex items-center p-4">
            {/* User Profile */}
            <div className="relative group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-slate-400"></div>{" "}
              {/* Profile Picture */}
              <div className="absolute top-1/2 -translate-y-1/2 right-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 ease-in-out bg-slate-800 px-3 py-1 rounded-lg text-white text-sm">
                Username
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <Sidebar />
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
//<div className="fixed inset-0 z-[-1] overflow-hidden">
//     <div className="w-full h-full animate-gradient bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 grainy"></div>
//   </div>
