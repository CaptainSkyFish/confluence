import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="fixed z-0 h-[400px] flex justify-center bottom-0 text-center w-screen text-8xl bg-[white] text-[#black]">
      <div className="grid grid-cols-3 pt-30 h-full w-[90%]">
        <div className="grid grid-cols-3 col-span-2 text-sm text-slate-700 font-semibold text-left ">
          <div className="flex flex-col mx-10">
            <div className="font-bold mb-4">Learn</div>
            <Link to="" className="py-1 hover:text-black hover:underline">
              About
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Blog
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Founders
            </Link>
          </div>
          <div className="flex flex-col mx-10">
            <div className="font-bold mb-4">Support</div>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Help and Support
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Terms of Service
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Trust and Safety
            </Link>
          </div>
          <div className="flex flex-col mx-10 mb-6">
            <div className="font-bold mb-4">Contact</div>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Feedback
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Report errors
            </Link>
          </div>
        </div>
        <div className="text-black col-span-1 text-right pr-0 text-6xl font-bold text-wrap opacity-15">
          Join the conversations you are missing.
          <h4 className="text-8xl items-center font-krylon bg-gradient-to-tr from-[#9796F0] to-[#FBC7D4] bg-clip-text text-transparent backdrop-filter backdrop-blur-3xl opacity-90 ">
            Confluence
          </h4>
        </div>
      </div>
    </div>
  );
};
