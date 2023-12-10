import React from "react";
import { motion } from "framer-motion";
import ScheduleTab from "../components/ScheduleTab";
import data from "../components/schedule.json";

const Schedule = () => {
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
        <div>
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <h3 align="center">Расписание</h3>
          </motion.div>
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <div className="scheduleboxbox">
              <div className="schedulebox">
                <ScheduleTab data={data} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Schedule;
