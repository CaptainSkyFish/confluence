export const Appbar = () => {
  return <div className="fixed left-1/2 h-[60px] w-full flex items-center max-w-[650px] transform -translate-x-1/2 rounded-full bg-[hsla(0,0%,93%,0.72)] backdrop-blur-lg px-6 top-6">
      <div className="font-extrabold flex flex-grow font-rosamila text-2xl text-black">
        Confluence
      </div>
      <div className="flex items-center gap-8">
        <div className="font-bold invisible md:visible text-sm flex flex-row gap-4">
          <span>Why Confluence?</span>
          <span>Privacy</span>
          <span>Testimonials</span>
        </div>
        <div className="p-3 font-bold text-nowrap text-black border border-black transition-all duration-500 hover:rounded-xl ">
          Log In
        </div>
    </div>
  </div>
}
