import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../image/logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Kafedra Logo" />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/staff">Сотрудники</NavLink>
          <NavLink to="/information">Информация</NavLink>
          <NavLink to="/schedule">Расписание</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
