// src/pages/Home.jsx
import React from "react";
import { PageWrapperHome } from "../components/PageWrapperHome";
import zgu from "../image/zgu.png";
import nornik from "../image/nornik.jpg";
import arn from "../image/arn.jpg";
import administracia from "../image/administracia.jpg";

const Home = () => {
  return (
    <div className="boxhome">
      <PageWrapperHome>
        <div className="titlesection">
          <h1>Кафедра "Информационных систем и технологий"</h1>
          <img src={zgu} alt="ZGU Logo" className="zguimg" />
        </div>

        <div className="boxsection">
          <div className="lilbox1">
            <h2>Образование</h2>
            <p>Инновационные программы для будущих IT-специалистов</p>
          </div>
          <div className="lilbox2">
            <h2>Наука и исследования</h2>
            <p>
              Ведущие исследования в области информационных систем и технологий
            </p>
          </div>
          <div className="lilbox3">
            <h2>Партнерство и сотрудничество</h2>
            <p>
              Взаимодействие с ведущими компаниями и организациями города
              Норильск
            </p>
            <div className="imgsection">
              <img src={nornik} alt="nornik" />
              <img src={arn} alt="arn" />
              <img src={administracia} alt="administracia" />
            </div>
          </div>
        </div>
        <div className="okafedre">
          <h3 align="center">О кафедре</h3>
          <div className="kaf1">
            <div className="lilbox4">Курсы проводимые на кафедре</div>
            <div className="lilbox4">
              Дата основания {""}5 декабря {""}
              2002 года
            </div>
            <div className="lilbox4">
              <p>
                Средний возраст сотрудников кафедры составляет {""}
                36,5 лет
              </p>
            </div>
          </div>
          <div className="kaf2">
            <div className="kafleft">
              <div className="kafleft1">
                <div className="lilbox4">
                  Передовой центр научных исследований и разработок в области
                  информационных технологий на территории Крайнего Севера.
                </div>
                <div className="lilbox4">
                  Сотрудничаем с крупнейшим в мире производителем никеля и
                  палладия компанией НорНикель, что позволяет студентам получить
                  практические навыки работы.
                </div>
              </div>
              <div className="kafleft2">
                <div className="lilbox9">ИСиТ</div>
                <div className="lilbox10">
                  Заполярный государственный универститет им.н.м. федоровского
                </div>
              </div>
            </div>
            <div className="kafright">
              <div className="lilbox8">Норильск</div>
            </div>
          </div>
        </div>
        <div className="napravlenia">
          <h3 align="center">Направления</h3>
          <div className="napravlenias">
            <div className="lilbox17">
              <div className="titlenapravlenie1 background-tint">
                <h4 align="left">Прикладная информатика в экономике</h4>
                <div className="forma">
                  <h4 align="left">Бакалавриат</h4>
                  <div className="numbox">
                    <p>09.03.03</p>
                  </div>
                </div>
              </div>
              <div className="napravlenieinfo">
                <div className="formaobuchenia">
                  <h5>очная</h5>
                  <p>Форма обучения</p>
                </div>
                <div className="srokobuchenia">
                  <h5>4 года</h5>
                  <p>Срок обучения</p>
                </div>
                <div className="prohodnoyball">
                  <h5>150</h5>
                  <p>Проходной балл</p>
                </div>
              </div>
            </div>
            <div className="lilbox17">
              <div className="titlenapravlenie2 background-tint">
                <h4 align="left">Информационные системы и технологии</h4>
                <div className="forma">
                  <h4 align="left">Бакалавриат</h4>
                  <div className="numbox">
                    <p>09.03.02</p>
                  </div>
                </div>
              </div>
              <div className="napravlenieinfo">
                <div className="formaobuchenia">
                  <h5>очная</h5>
                  <p>Форма обучения</p>
                </div>
                <div className="srokobuchenia">
                  <h5>4 года</h5>
                  <p>Срок обучения</p>
                </div>
                <div className="prohodnoyball">
                  <h5>145</h5>
                  <p>Проходной балл</p>
                </div>
              </div>
            </div>
            <div className="lilbox17">
              <div className="titlenapravlenie3 background-tint">
                <h4 align="left">Прикладная информатика в экономике</h4>
                <div className="forma">
                  <h4 align="left">Магистратура</h4>
                  <div className="numbox">
                    <p>09.04.03</p>
                  </div>
                </div>
              </div>
              <div className="napravlenieinfo">
                <div className="formaobuchenia">
                  <h5>очная, заочная, очно-заочная</h5>
                  <p>Форма обучения</p>
                </div>
                <div className="srokobuchenia">
                  <h5>2 или 2,5 года</h5>
                  <p>Срок обучения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapperHome>
    </div>
  );
};

export default Home;
