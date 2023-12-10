import React from "react";
import { NavLink } from "react-router-dom";

import zgu1 from "../image/zgu1.png";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="top">
          <div>
            <a href="https://polaruniversity.ru/">
              <img src={zgu1} className="zguimg"></img>
            </a>
          </div>
        </div>
        <div className="container">
          <NavLink to="/" className="brand">
            UCuT
          </NavLink>
          <div className="nav-links">
            <NavLink to="/staff">Сотрудники</NavLink>
            <NavLink to="/information">Информация</NavLink>
            <NavLink to="/schedule">Расписание</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
