import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/navigation/NavBar.jsx";

import Home from "./components/home/Home.jsx";
import Symposium from "./components/symposium/Symposium.jsx";
import Instructions from "./components/authInstructions/Instructions.jsx";
import Team from "./components/team/Team.jsx";
import NotFound from "./components/notfound/NotFound.jsx";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symposium" element={<Symposium />} />
          <Route path="/author-instructions" element={<Instructions />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
      <ScrollToTop
        color="white"
        smooth
        style={{
          backgroundColor: "#6D2C95",
          borderRadius: "20%",
          padding: "0.5rem",
          boxShadow: "0 10 16px rgba(0, 0, 0, 0.8)",
          justifyItems: "center",
          alignItems: "center",
          display: "flex",
        }}
      />
    </div>
  );
}

export default App;
