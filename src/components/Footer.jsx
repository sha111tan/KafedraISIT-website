import React from "react";
import { NavLink } from "react-router-dom";
import vk from "../image/vk.png";
import tg from "../image/tg.png";
import ok from "../image/ok.png";

const Footer = () => {
  return (
    <div className="boxfooter">
      <div className="footer">
        <div className="footerleft">
          <div className="lilbox11">Подпишитесь</div>
          <div className="lilbox12">
            <div>Полезные ссылки</div>
            <div className="ssilki">
              <div className="ssilkicol">
                <a href="https://polaruniversity.ru/obuchayushchimsya/">
                  <p>Обучающимся</p>
                </a>
                <a href="https://polaruniversity.ru/postupayushchim/">
                  <p>Поступающим</p>
                </a>
                <a href="https://polaruniversity.ru/vypuskniku/">
                  <p>Выпускникам</p>
                </a>
                <a href="https://polaruniversity.ru/sotrudniku/">
                  <p>Сотрудникам</p>
                </a>
                <a href="https://polaruniversity.ru/partneram/">
                  <p>Партнерам</p>
                </a>
              </div>
              <div className="ssilkicol">
                <a href="https://polaruniversity.ru/about/">
                  <p>Об университете</p>
                </a>
                <a href="https://polaruniversity.ru/news/">
                  <p>Новости</p>
                </a>
                <a href="https://polaruniversity.ru/nauka/">
                  <p>Наука</p>
                </a>
              </div>
              <div className="ssilkicol">
                <a href="https://polaruniversity.ru/protivodeystvie-korruptsiy/">
                  <p>Противодействие коррупции</p>
                </a>
                <a href="https://polaruniversity.ru/tsentr-trudoustroystva/">
                  <p>Центр карьеры</p>
                </a>
                <a href="https://obrnadzor.gov.ru/">
                  <p>Рособрнадзор</p>
                </a>
                <a href="https://polaruniversity.ru/antiterror/">
                  <p>Антитеррор</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footerright">
          <div className="lilbox13">
            <div className="kontaktititle">Контакты</div>
            <div>
              <p>
                <div>
                  Email: FEEU@norvuz.ru<br></br>
                </div>
                Для корреспонденции: 663310, Красноярский край, г. Норильскул.
                50 лет Октября, 7, НГИИ, ФЭЭиУ, аудитория 305а<br></br>
                <br></br>
                Телефон: 8 (3919) 47-39-06
              </p>
            </div>
          </div>

          <div className="footerright2">
            <div className="lilbox14">
              <a href="https://vk.com/zgu_university">
                <img src={vk} className="vk"></img>
              </a>
            </div>
            <div className="lilbox15">
              <a href="https://t.me/zgu_university">
                <img src={tg} className="tg"></img>
              </a>
            </div>
            <div className="lilbox16">
              <a href="https://ok.ru/group/58461624008889">
                <img src={ok} className="ok"></img>
              </a>
            </div>
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
