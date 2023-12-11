import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import zgu1 from "../image/zgu1.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="top">
          <div>
            <a href="https://polaruniversity.ru/">
              <img src={zgu1} className="zguimg" alt="ZGU Logo"></img>
            </a>
          </div>
        </div>
        <div className="container">
          <NavLink to="/" className="brand">
            UCuT
          </NavLink>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <NavLink to="/staff" onClick={toggleMenu}>
              Сотрудники
            </NavLink>
            <NavLink to="/information" onClick={toggleMenu}>
              Информация
            </NavLink>
            <NavLink to="/schedule" onClick={toggleMenu}>
              Расписание
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
