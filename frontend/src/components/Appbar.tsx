export const Appbar = () => {
  return (
    <div className="fixed z-15 left-1/2 h-[60px] w-full flex items-center max-w-[650px] transform -translate-x-1/2 rounded-full bg-[rgba( 255, 255, 255, 0.15 )] backdrop-blur-xl px-6 top-6">
      <div className="font-extrabold flex flex-grow font-casselin text-2xl bg-gradient-to-r from-[#9796F0] to-[#FBC7D4] bg-clip-text text-transparent">
        Confluence
      </div>
      <div className="flex items-center gap-6">
        <div className="font-semibold invisible md:visible text-slate-700 text-sm flex flex-row gap-4">
          <span className="hover:text-slate-800 hover:underline">Why us?</span>
          <span className="hover:text-slate-800 hover:underline">Privacy</span>
          <span className="hover:text-slate-800 hover:underline">
            Testimonials
          </span>
        </div>
        <button className="group border border-black relative cursor-pointer overflow-hidden flex items-center font-semibold max-w-fit transition-all duration-500 hover:rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23px"
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-[-24px] translate-x-4 transition-all opacity-0 duration-500 group-hover:left-[8px] group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path
              d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="group-hover:pr-3 group-hover:pl-9 px-6 py-2 transition-all duration-500 text-black">
            Log in
          </span>
        </button>
      </div>
    </div>
  );
};
