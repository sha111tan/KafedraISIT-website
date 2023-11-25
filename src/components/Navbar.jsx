import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand">
          <img src={logo} alt="Kafedra Logo" />
        </Link>
        <div className="nav-links">
          <Link to="/directions">Направления</Link>
          <Link to="/staff">Сотрудники</Link>
          <Link to="/information">Информация</Link>
          <Link to="/achievements">Достижения</Link>
          <Link to="/schedule">Расписание</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
