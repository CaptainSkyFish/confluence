import { useEffect } from "react";
import { BACKEND_URL } from "../config";
import { Link } from "react-router-dom";
const Inbox = () => {
  //useEffect(() => {
  //  axios.get(`${BACKEND_URL}api/v1/rooms/getAllRooms`).then();
  //});
  return (
    <div className="fixed inset-0 bg-[black] backdrop-blur-3xl">
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-1 mx-2 h-screen w-full text-slate-100">
          <div className="">
            <Link
              to="/"
              className="font-extrabold font-casselin text-3xl bg-gradient-to-r from-[#9796F0] to-[#FBC7D4] bg-clip-text text-transparent"
            >
              Confluence
            </Link>
          </div>

          <h2 className="font-krylon text-xl font-extralight">Rooms</h2>

          <div className="overflow-hidden">
            <div className="rounded-xl p-1 w-[90%] animate-gradient hover:bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 items-center">
              <div className="rounded-xl p-1 mr-auto bg-slate-200">
                <div className="bg-slate-300 rounded-xl m-1 w-fit text-transparent">
                  roomName
                </div>
                <div className="bg-slate-300 m-1 rounded-xl w-4/5 text-transparent">
                  Message
                </div>
              </div>
            </div>
            <div className="rounded-xl p-1 w-[90%] animate-gradient hover:bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 items-center">
              <div className="rounded-xl p-1 mr-auto bg-slate-200">
                <div className="bg-slate-300 rounded-xl m-1 w-fit text-transparent">
                  roomName
                </div>
                <div className="bg-slate-300 m-1 rounded-xl w-4/5 text-transparent">
                  Message
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 mt-4 rounded-tl-4xl backdrop-blur-3xl animate-gradient bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 w-full h-screen">
          <div className=" backdrop-blur-3xl bg-slate-800/40 backdrop-filter grainy w-full h-full rounded-4xl m-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
//<div className="fixed inset-0 z-[-1] overflow-hidden">
//     <div className="w-full h-full animate-gradient bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 grainy"></div>
//   </div>
