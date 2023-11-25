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

        </PageWrapperHome>
        
      </div>
    
  );
};

export default Home;
