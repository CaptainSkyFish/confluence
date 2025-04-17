import { Appbar } from "../components/Appbar"
import { Footer } from "../components/Footer"

const LandingPage = () => {
  return <div>
    <div className="relative bg-[#e9e6e1] min-h-screen z-10 mb-[300px] rounded-b-4xl">
      <Appbar />
      <div className="grid grid-cols-2">
        <div className=" text-black font-extrabold text-wrap text-8xl p-5">Where Conversations Come to Life.</div>
        <img src="" alt="landingPageimg.jpeg"></img>
      </div>  
    </div>
    <Footer />
  </div> 
}

export default LandingPage
