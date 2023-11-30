import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="boxfooter">
      <div className="footer">
        <div className="footerleft">
          <div className="lilbox11">Подпишись мяу</div>
          <div className="lilbox12">Полезные ссылки</div>
        </div>
        <div className="footerright">
          <div className="lilbox13">Контакты</div>
          <div className="footerright2">
            <div className="lilbox14">ВК</div>
            <div className="lilbox15">ТГ</div>
            <div className="lilbox16">ОК</div>
          </div>
        </div>
      </div>
      <p align="center">
        <br></br>© 2023 ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ
        УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ«ЗАПОЛЯРНЫЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ
        ИМ. Н.М. ФЕДОРОВСКОГО»
      </p>
    </div>
  );
};

export default Footer;
