import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Information from "./pages/Information";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/information" element={<Information />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
