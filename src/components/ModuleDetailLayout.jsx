import React from "react";
import VideoPlayer from "./VideoPlayer";
import LessonList from "./LessonList";

const ModuleDetailLayout = ({
  title,
  teacher,
  videoUrl,
  description,
  lessons,
  searchPlaceholder = "Buscar contenido..."
}) => {
  return (
    <div className="p-3 md:p-8 w-full">
      <div
        className="
          rounded-3xl
          p-6
          md:p-8
          w-full
          flex
          flex-col
          gap-8
        "
      >
        <div className="w-full">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="
              w-full
              p-3
              rounded-full
              border
              border-gray-300
              focus:outline-none
              focus:border-yellow-500
              transition
              text-sm
              md:text-base
            "
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div className="flex flex-col">

            <div className="rounded-2xl shadow-md overflow-hidden h-96">
              <VideoPlayer videoUrl={videoUrl} />
            </div>

            <div className="mt-5">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Lección 3 — Cómo crear la Nasa
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/willyrex.png"
                  alt="Profesor"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-gray-600 text-sm md:text-base">
                  @{teacher}
                </span>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div
            className="
              bg-[#F6F2DD]
              rounded-2xl
              p-4
              shadow-md
              h-fit
              flex
              flex-col
              gap-4
            "
          >
            <h4 className="text-base md:text-lg font-semibold text-gray-800">
              Lessons
            </h4>
            <LessonList lessons={lessons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetailLayout;
