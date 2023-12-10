import React from "react";
import Subscribe from "./Subscribe";
import vk from "../image/vk.png";
import tg from "../image/tg.png";
import ok from "../image/ok.png";

const Footer = () => {
  return (
    <div className="footerbox">
      <div className="boxfooter">
        <div className="footer">
          <div className="footerleft">
            <div className="lilbox11">
              Следите за обновлениями <Subscribe></Subscribe>
            </div>
            <div className="lilbox12">
              <div>Полезные ссылки</div>
              <div className="ssilki">
                <div className="ssilkicol">
                  <a href="https://polaruniversity.ru/obuchayushchimsya/">
                    <p className="ssilka">Обучающимся</p>
                  </a>
                  <a href="https://polaruniversity.ru/postupayushchim/">
                    <p className="ssilka">Поступающим</p>
                  </a>
                  <a href="https://polaruniversity.ru/vypuskniku/">
                    <p className="ssilka">Выпускникам</p>
                  </a>
                  <a href="https://polaruniversity.ru/sotrudniku/">
                    <p className="ssilka">Сотрудникам</p>
                  </a>
                  <a href="https://polaruniversity.ru/partneram/">
                    <p className="ssilka">Партнерам</p>
                  </a>
                </div>
                <div className="ssilkicol">
                  <a href="https://polaruniversity.ru/about/">
                    <p className="ssilka">Об университете</p>
                  </a>
                  <a href="https://polaruniversity.ru/news/">
                    <p className="ssilka">Новости</p>
                  </a>
                  <a href="https://polaruniversity.ru/nauka/">
                    <p className="ssilka">Наука</p>
                  </a>
                </div>
                <div className="ssilkicol">
                  <a href="https://polaruniversity.ru/protivodeystvie-korruptsiy/">
                    <p className="ssilka">Противодействие коррупции</p>
                  </a>
                  <a href="https://polaruniversity.ru/tsentr-trudoustroystva/">
                    <p className="ssilka">Центр карьеры</p>
                  </a>
                  <a href="https://obrnadzor.gov.ru/">
                    <p className="ssilka">Рособрнадзор</p>
                  </a>
                  <a href="https://polaruniversity.ru/antiterror/">
                    <p className="ssilka">Антитеррор</p>
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
                  <div className="mail">Email: FEEU@norvuz.ru</div>
                  Для корреспонденции: 663310, Красноярский край, г. Норильскул.
                  50 лет Октября, 7, НГИИ, ФЭЭиУ, аудитория 305а
                  <br></br>
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
    </div>
  );
};

export default Footer;
