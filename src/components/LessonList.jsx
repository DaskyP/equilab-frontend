import React from "react";

const LessonList = ({ lessons }) => {
  return (
    <ul className="flex flex-col space-y-4">
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          className="flex items-center gap-3 bg-white rounded-lg p-3 shadow hover:bg-gray-50 transition"
        >
          <div className="flex justify-center items-center w-8 h-8 bg-orange-500 rounded-md text-white">
            <span className="text-sm">{lesson.id}</span>
          </div>

          <div>
            <p className="text-sm font-semibold">{lesson.title}</p>
            <span className="text-xs text-gray-500">{lesson.duration}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LessonList;
