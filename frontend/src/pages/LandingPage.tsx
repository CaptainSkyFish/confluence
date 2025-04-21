import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { Footer } from "../components/Footer";
import PartnerCarousel from "../components/PartnerCarousel";
import StackedScrollText from "../components/StackedScrollText";
import { TestimonialsSection } from "../components/Testimonials";

const LandingPage = () => {
  const [showInput, setShowInput] = useState(false);

  const handleJoinClick = () => {
    setShowInput(true);
  };

  return (
    <div>
      <div className="relative max-w-fit bg-[#0f0f0f] min-h-screen z-10 mb-[300px] pb-50 rounded-b-4xl">
        <Appbar />
        <div className="grid w-4/5 mx-auto pt-[108px] px-12 grid-cols-2">
          <div>
            <div className=" text-[#e9e6e1] font-krylon pl-0 font-bold text-wrap text-7xl/snug p-5">
              Where conversations come to life
            </div>
            <div className="text-[#e9e6e1] pl-0 w-4/5 font-semibold text-wrap text-sm/normal p-2">
              Build private rooms, invite friends, and experience seamless,
              secure real-time chat—right from your browser.
            </div>
            <div className="flex pt-14 gap-10 items-center">
              <button className="group relative bg-amber-100 p-3 cursor-pointer overflow-hidden flex items-center font-semibold max-w-fit transition-all duration-500 hover:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-[-24px] translate-x-4 transition-all opacity-0 duration-500 group-hover:left-[12px] group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5"
                    stroke="#1C274C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="group-hover:pl-5 group-hover:underline transition-all duration-500 text-[#1C274C]">
                  Get Started for free
                </span>
              </button>
              <div className="flex justify-center">
                {!showInput ? (
                  <div
                    className="hover:underline p-2 pl-0 font-bold text-[#e9e6e1] cursor-pointer"
                    onClick={handleJoinClick}
                  >
                    Join a Room?
                  </div>
                ) : (
                  <div className="relative max-w-fit">
                    <input
                      className="pr-20 pl-3 py-3 rounded-sm border border-white font-bold text-[#e9e6e1] bg-transparent"
                      type="text"
                      placeholder="Room Code"
                    />
                    <button className="absolute right-1 top-1 bottom-1 px-3 bg-red-100 text-black font-semibold rounded-sm hover:rounded-none hover:bg-red-200">
                      Join
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="absolute right-0 w-[750px] h-[550px] overflow-hidden rounded-tl-4xl bg-gradient-to-tr from-[#9796F0] to-[#FBC7D4]">
            <div className="relative w-[800px] h-[600px] hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 ease-in-out">
              <img
                src="/images/sample.PNG"
                alt="landingPageimg.jpeg"
                className="object-cover object-top-left w-full h-full pt-2 pl-2 rounded-4xl"
              />
              {/* Optional overlay if needed */}
              <div className="absolute bottom-0 w-full h-[50%] opacity-80 pointer-events-none bg-gradient-to-t from-[#9796F0] to-transparent blur" />
            </div>
          </div>{" "}
        </div>
        <PartnerCarousel />

        <StackedScrollText />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
