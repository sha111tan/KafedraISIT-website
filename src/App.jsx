import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Directions from "./pages/Directions";
import Staff from "./pages/Staff";
import Information from "./pages/Information";
import Achievements from "./pages/Achievements";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/information" element={<Information />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
