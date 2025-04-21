import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Inbox from "./pages/Inbox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.from(".fade-up", {
      scrollTrigger: {
        trigger: ".fade-up",
        start: "top bottom", // when top of element hits bottom of viewport
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/me" element={<Inbox />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
