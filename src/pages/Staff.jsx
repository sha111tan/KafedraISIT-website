import React from "react";
import { motion } from "framer-motion";

import { PageWrapper } from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";
import Petrov from "../image/petrov.jpg";
import Dyptan from "../image/dyptan.jpg";
import Tsukanov from "../image/tsukanov.jpg";
import Belyaev from "../image/belyaev.jpg";
import Popkova from "../image/popkova.jpg";
import Faddeenkov from "../image/faddeenkov.jpg";
import Bodryakova from "../image/bodryakova.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Staff = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div>
      <motion.div
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
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <h3 align="center">Сотрудники кафедры</h3>
        </motion.div>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <div className="staffcontainer">
            <Swiper
              loop={true}
              centeredSlides={true}
              spaceBetween={30}
              slidesPerView={3.5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="hstaff">
                  <div className="stafflilbox">
                    <div className="staffimg">
                      <img src={Dyptan} className="stafimg"></img>
                    </div>
                    <div className="stafftext">
                      Дыптан Елена<br></br> Арнольдовна
                    </div>
                    <div className="infboxstaff">
                      <div className="staffinf">
                        <p>Старший преподаватель</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hstaff">
                  <div className="stafflilbox">
                    <div className="staffimg">
                      <img src={Belyaev} className="stafimg"></img>
                    </div>
                    <div className="stafftext">
                      Беляев Игорь<br></br> Сергеевич
                    </div>
                    <div className="infboxstaff">
                      <div className="staffinf">
                        <p>Доцент</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hstaff">
                  <div className="stafflilbox">
                    <div className="staffimg">
                      <img src={Popkova} className="stafimg"></img>
                    </div>
                    <div className="stafftext">
                      Попкова Алла<br></br> Алексеевна
                    </div>
                    <div className="infboxstaff">
                      <div className="staffinf">
                        <p>Доцент</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hstaff">
                  <div className="stafflilbox">
                    <div className="staffimg">
                      <img src={Petrov} className="stafimg"></img>
                    </div>
                    <div className="stafftext">
                      Петров Алексей<br></br> Михайлович
                    </div>
                    <div className="infboxstaff">
                      <div className="staffinf">
                        <p>Доцент</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hstaff">
                  <div className="stafflilbox">
                    <div className="staffimg">
                      <img src={Tsukanov} className="stafimg"></img>
                    </div>
                    <div className="stafftext">
                      Цуканов Глеб<br></br> Константинович
                    </div>
                    <div className="infboxstaff">
                      <div className="staffinf">
                        <p>Ассистент</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hstaff">
                  <div className="stafflilbox">
                    <div className="staffimg">
                      <img src={Faddeenkov} className="stafimg"></img>
                    </div>
                    <div className="stafftext">
                      Фаддеенков Андрей<br></br> Владимирович
                    </div>
                    <div className="infboxstaff">
                      <div className="staffinf">
                        <p>Доцент</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hstaff">
                  <div className="stafflilbox">
                    <div className="staffimg">
                      <img src={Bodryakova} className="stafimg"></img>
                    </div>
                    <div className="stafftext">
                      Бодрякова Людмила<br></br> Николаевна
                    </div>
                    <div className="infboxstaff">
                      <div className="staffinf">
                        <p>Доцент</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Staff;
