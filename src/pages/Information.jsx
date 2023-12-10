import React from "react";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const Information = () => {
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
          <h3 align="center" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            Научная деятельность
          </h3>
        </motion.div>

        <motion.div
          className="nauchnayadeyatelnost"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="left">
            <div className="lilbox4">
              <p>
                <div className="titleinf">
                  <div className="span">Научная деятельность</div>
                </div>
                Студенты и преподаватели активно занимаются научной
                деятельностью в области информационных технологий
              </p>
            </div>
            <div className="lilbox4">
              <p>
                <div className="span">Исследовательская деятельность</div>
                Проводятся научные исследования в различных областях информатики
                и программирования
              </p>
            </div>
            <div className="lilbox4">
              <p>
                <div className="span">Научные проекты</div>
                Преподаватели и студенты ведут научные исследования, публикуют
                статьи в научных журналах и принимают участие в конференциях
                и семинарах.
              </p>
            </div>
            <div className="lilbox4">
              <p>
                <div className="span">Обучение</div>
                Регулярно проводятся научные семинары и лекции, на которых
                приглашаются ведущие специалисты из различных областей
                информатики и технологий.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="lilbox5">
              <p>
                <div className="span">Лаборатории</div>
                Студенты имеют доступ к современным лабораториям, оборудованным
                современным техническим оборудованием, что позволяет
                им проводить научные эксперименты и исследования
              </p>
            </div>
            <div className="lilbox6">
              <p>
                <div className="span">Стажировки</div>
                Студенты могут принимать участие в стажировках в крупных
                технологических компаниях.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <FadeIn delay={0.2} direction="right" padding fullwidth>
        <h3 align="center">Достижения и перспективы</h3>
      </FadeIn>
      <FadeIn delay={0.3} direction="right" padding fullwidth>
        <div className="dostizhenia">
          <div className="up">
            <div className="lilbox7">
              <p>
                <div className="span">Конкурсы</div>
                Активное участие в международных конкурсах и выставках, где
                кафедра представляет свои научные и практические разработки, что
                способствует развитию научных контактов и обмену опытом.
              </p>
            </div>
            <div className="lilbox7">
              <p>
                <div className="span">Цифровизация</div>
                Внедрение новых технологий в учебный процесс, включая применение
                электронных учебных материалов и онлайн-курсов, что позволяет
                обучаться студентам в любое время и из любой точки мира.
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="lilbox7">
              <p>
                <div className="span">Современные технологии</div>
                Разработка новых методов и алгоритмов обработки данных, создание
                и оптимизация баз данных и информационных систем.
              </p>
            </div>
            <div className="lilbox7">
              <p>
                <div className="span">Сотрудничество</div>
                Сотрудничество с крупными IT-компаниями и предприятиями, что
                позволяет студентам проходить производственную практику и
                трудоустроиться после окончания обучения
              </p>
            </div>
            <div className="lilbox7">
              <p>
                <div className="span">Разработка</div>
                Разработка программных продуктов и систем для промышленных
                предприятий, в том числе для автоматизации производственных
                процессов.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Information;
