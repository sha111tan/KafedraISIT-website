import React from "react";
import { PageWrapper } from "../components/PageWrapper";

const Staff = () => {
  return (
    <div className="staffbox">
      <PageWrapper>
        <h3 align="center">Сотрудники кафедры</h3>
        <div className="staffcontainer">
          <div className="stafflilbox">
            <div className="staffimg"></div>
            <div className="stafftext">
              Дыптан Елена<br></br>Арнольдовна
            </div>
          </div>

          <div className="stafflilbox">
            <div className="staffimg"></div>
            <div className="stafftext">
              Беляев Игорь<br></br> Сергеевич
            </div>
          </div>
          <div className="stafflilbox">
            <div className="staffimg"></div>
            <div className="stafftext">
              Попкова Алла<br></br> Алексеевна
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Staff;
