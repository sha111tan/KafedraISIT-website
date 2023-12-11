import React from "react";

const ScheduleResult = ({ group, day, schedule }) => {
  return (
    <div>
      <div className="grouptitle">
        Расписание для группы {group}, {day}:
      </div>
      <ul>
        {schedule.map((lesson, index) => (
          <li key={index}>
            <strong>Время:</strong> {lesson.time}
            <br />
            <strong>Аудитория:</strong> {lesson.classroom}
            <br />
            <strong>Предмет:</strong> {lesson.subject}
            <br />
            <strong>Преподаватель:</strong> {lesson.teacher}
            <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleResult;
