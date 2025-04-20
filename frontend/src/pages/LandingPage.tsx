import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { Footer } from "../components/Footer"

const LandingPage = () => {
  const [showInput, setShowInput] = useState(false)

  const handleJoinClick = () => {
    setShowInput(true)
  }

  return <div>
    <div className="relative max-w-screen bg-black min-h-screen z-10 mb-[300px] rounded-b-4xl">
      <Appbar />
      <div className="grid w-4/5 mx-auto pt-[108px] px-12 grid-cols-2">
        <div>
          <div className=" text-[#e9e6e1] font-extrabold text-wrap text-6xl p-5">Where Conversations Come to Life.</div>
          <div className="text-[#e9e6e1] w-4/5 font-semibold text-wrap text-sm p-3">Build private rooms, invite friends, and experience seamless, secure real-time chat—right from your browser.</div>
        </div>
        <div className="h-full w-full bg-slate-300 rounded-lg p-5 pb-0 opacity-15">
          <img src="" alt="landingPageimg.jpeg"></img>
        </div>
        <div>
          <div className="flex gap-10 items-center">
            <button className="group relative bg-amber-100 p-3 cursor-pointer overflow-hidden flex items-center font-extrabold max-w-fit transition-all duration-500 hover:rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" className="absolute left-[-24px] translate-x-4 transition-all opacity-0 duration-500 group-hover:left-[12px] group-hover:translate-x-0 group-hover:opacity-100">
                <path d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5" stroke="#1C274C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="group-hover:pl-5 transition-all duration-500 text-[#1C274C]">Get Started for free</span>
            </button>
            <div className="flex flex-col">
              {!showInput ? (<div
                className="hover:underline p-2 pl-0 font-extrabold text-[#e9e6e1] cursor-pointer"
                onClick={handleJoinClick}
              >
                Join a Room?
              </div>
              ) : ( <input
                  className="max-w-fit border p-3 border-white font-bold text-[#e9e6e1]"
                  type="text"
                  placeholder="Room Code"
                />
              )}
              <button className="text-semibold p-3 hover:p-4">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
}

export default LandingPage
