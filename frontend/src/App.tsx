import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
function App() {
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />

      </Routes>
    </Router>
  </div>
}
export default App
