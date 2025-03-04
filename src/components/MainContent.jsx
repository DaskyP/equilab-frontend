import { useState } from "react";
import CourseTable from "./CourseTable";
import ScoreCard from "./ScoreCard";
import UserProfile from "./UserProfile";

const MainContent = () => {
  const [user] = useState({
    name: "Gogi",
    averageScore: 9.6,
    progress: 34,
    courses: [
      { id: 1, name: "Curso Módulo 1", date: "Feb 12", rating: 4.8, level: "Avanzado", bookmarked: true },
      { id: 2, name: "Curso Módulo 2", date: "Feb 14", rating: 4.6, level: "Medio", bookmarked: false },
      { id: 3, name: "Curso Módulo 3", date: "Feb 16", rating: 4.5, level: "Principiante", bookmarked: false },
      { id: 4, name: "Curso Módulo 4", date: "Feb 18", rating: 4.8, level: "Avanzado", bookmarked: false },
    ],
  });

  return (
    <main className="w-full max-w-screen-xl mx-auto flex flex-col p-6 overflow-hidden">
      <div>
        <h2 className="text-4xl font-semibold">Resumen</h2>
        <p className="text-gray-500 text-md">
          Bienvenido de nuevo {user.name}, ¡Sigue aprendiendo!
        </p>
      </div>

      <div className="flex flex-wrap mt-6 gap-6">
        
        <div className="flex-1 flex flex-col gap-6 min-w-[60%]">
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[300px]">
              <ScoreCard score={user.averageScore} />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between w-[20rem]">
              <h3 className="text-lg font-semibold">Módulo 1</h3>
              <p className="text-gray-500 text-sm">Principiante</p>
              <div className="mt-3">
                <div className="bg-gray-300 w-full h-2 rounded-full relative">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${user.progress}%` }}
                  />
                </div>
                <p className="text-right text-sm mt-1">{user.progress}% En progreso</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex-grow min-w-[60%]">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Cursos presentados</h3>
              <a href="#" className="text-yellow-500 font-semibold">View all →</a>
            </div>
            <CourseTable courses={user.courses} />
          </div>
        </div>

        <div className="w-full md:w-[25rem]">
          <UserProfile />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
