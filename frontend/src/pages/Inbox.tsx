import { Link } from "react-router-dom";
import Chatbox from "../components/Chatbox";
import Sidebar from "../components/Sidebar";

const Inbox = () => {
  return (
    <div className="fixed inset-0 bg-[black] backdrop-blur-3xl">
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-1 mx-2 h-screen w-full text-slate-100">
          <div className="">
            <Link
              to="/"
              className="font-extrabold fade-up font-casselin text-3xl bg-gradient-to-r from-[#9796F0] to-[#FBC7D4] bg-clip-text text-transparent"
            >
              Confluence
            </Link>
          </div>
          <Sidebar />
        </div>
        <Chatbox />
      </div>
    </div>
  );
};

export default Inbox;
//<div className="fixed inset-0 z-[-1] overflow-hidden">
//     <div className="w-full h-full animate-gradient bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 grainy"></div>
//   </div>
