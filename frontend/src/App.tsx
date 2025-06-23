import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Inbox from "./pages/Inbox";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import GradientMeshBackground from "./pages/GradientMeshBackground";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastRenderer } from "./components/ToastRenderer";
import PublicOnlyLayout from "./layouts/PublicOnlyLayout";
import PrivateOnlyLayout from "./layouts/PrivateOnlyLayout";
import useUserStore from "./store/useUserStore";

gsap.registerPlugin(ScrollTrigger);
const queryClient = new QueryClient();

function App() {
  const getUser = useUserStore((state) => state.getUser);
  useEffect(() => {
    getUser();
    gsap.from(".fade-up", {
      scrollTrigger: {
        trigger: ".fade-up",
        start: "top bottom",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ToastRenderer>
          <Router>
            <Routes>
              <Route element={<PrivateOnlyLayout />}>
                <Route path="/me" element={<Inbox />} />
              </Route>

              <Route element={<PublicOnlyLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
              </Route>

              <Route path="/test" element={<GradientMeshBackground />} />
            </Routes>
          </Router>
        </ToastRenderer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
