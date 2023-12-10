// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import nornik from "../image/nornik.jpg";
import arn from "../image/arn.jpg";
import administracia from "../image/administracia.jpg";
import FadeIn from "../components/FadeIn";
import norilsk from "../image/norilsk.png";
import nornikel2 from "../image/nornikel2.png";
import itlogo from "../image/itlogo.png";
import zgu1 from "../image/zgu1.png";

const Home = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div>
      <motion.div
        className="boxhome"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          className="titlesection"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <h1>&lt;/Кафедра "Информационные системы и технологии"/&gt;</h1>
        </motion.div>

        <motion.div
          className="boxsection"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
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
              <img src={nornik} className="part" />
              <img src={arn} className="part" />
              <img src={administracia} className="part" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="okafedre">
        <FadeIn delay={0.2} direction="right" padding fullwidth>
          <h3 align="center">О кафедре</h3>
        </FadeIn>
        <FadeIn delay={0.3} direction="right" padding fullwidth>
          <div className="kaf1">
            <div className="lilbox4">
              <div align="center">
                <div className="span">Курсы, проводимые на кафедре:</div>
                <p>WEB-Программирование, базы данных, нейронные сети</p>
              </div>
            </div>
            <div className="lilbox4">
              <div align="center">
                <div className="span">Дата основания:</div>
                <div className="year">5 декабря 2002 года</div>
              </div>
            </div>
            <div className="lilbox4">
              <div align="center">
                <div className="span">Средний возраст сотрудников:</div>
                <div className="year">36,5 лет</div>
              </div>
            </div>
          </div>
          <div className="kaf2">
            <div className="kafleft">
              <div className="kafleft1">
                <div className="lilbox4">
                  <div align="center">
                    <img src={itlogo} className="itlogo"></img>
                    <p>
                      Передовой центр научных исследований и разработок в
                      области информационных технологий на территории Крайнего
                      Севера.
                    </p>
                  </div>
                </div>
                <div className="lilbox18">
                  <div>
                    <img src={nornikel2} className="nornikelimg"></img>
                    <p>
                      Сотрудничество с компанией "Норникель", открывает перед
                      студентами возможности для получения практических навыков
                      работы в условиях реального производства.
                    </p>
                  </div>
                </div>
              </div>
              <div className="kafleft2">
                <div className="lilbox9">
                  <h6>ИСиТ</h6>
                </div>
                <div className="lilbox10">
                  <img src={zgu1} className="zguimg2"></img>
                  <h6>
                    "Заполярный государственный универститет им. Н.М.
                    Федоровского"
                  </h6>
                </div>
              </div>
            </div>
            <div className="kafright">
              <div className="lilbox8">
                <img src={norilsk} className="norilskimg"></img>
                <h6 align="center">Норильск</h6>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="napravlenia">
        <FadeIn delay={0.2} direction="right" padding fullwidth>
          <h3 align="center">Направления</h3>
        </FadeIn>
        <FadeIn delay={0.3} direction="right" padding fullwidth>
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
                  <div className="span">очная</div>
                  <p>Форма обучения</p>
                </div>
                <div className="srokobuchenia">
                  <div className="span">4 года</div>
                  <p>Срок обучения</p>
                </div>
                <div className="prohodnoyball">
                  <div className="span">150</div>
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
                  <div className="span">очная</div>
                  <p>Форма обучения</p>
                </div>
                <div className="srokobuchenia">
                  <div className="span">4 года</div>
                  <p>Срок обучения</p>
                </div>
                <div className="prohodnoyball">
                  <div className="span">145</div>
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
                  <div className="span">очная, заочная, очно-заочная</div>
                  <p>Форма обучения</p>
                </div>
                <div className="srokobuchenia">
                  <div className="span">2 или 2,5 года</div>
                  <p>Срок обучения</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
