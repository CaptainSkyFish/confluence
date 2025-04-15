import "./landing.css"
const LandingPage = () => {
  return <div>
    <div className="bg-white relative rounded-b-3xl text-center z-10 min-h-screen text-black mb-[300px]">
      <div className="font-extrabold w-2 p-10 text-center text-8xl ">Main Content Goes Here</div>
      <div className="p-5">
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      <p>some cool content....</p>
      </div>
    </div>

    <div className="fixed moving gradient z-0 h-[400px] bottom-0 text-center w-screen text-8xl bg-black text-white">
      <div className="text-sm px-30 py-30 flex justify-between items-center">
        <span>info</span>
        <span>link</span>
        <span>about</span>
      </div>
      <div>Footer Reveals...</div>
    </div>
  </div> 
}

export default LandingPage
