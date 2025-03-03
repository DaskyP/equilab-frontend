import { useState } from "react";
import CourseTable from "./CourseTable";
import ScoreCard from "./ScoreCard";
import UserProfile from "./UserProfile"; 

const MainContent = () => {
  const [user, setUser] = useState({
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
    <main className="flex-1 p-6 bg-[#FBFAF4] rounded-3xl min-h-0 overflow-hidden">
      <div className="grid grid-cols-[2fr_1fr] gap-6 min-h-0 h-full">
        
        <div className="flex flex-col space-y-6 overflow-hidden">
          <h2 className="text-4xl font-semibold">Resumen</h2>
          <p className="text-gray-500 text-md">Bienvenido de nuevo {user.name}, ¡Sigue aprendiendo!</p>

          <div className="grid grid-cols-2 gap-6">
            <ScoreCard score={user.averageScore} />
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <h3 className="text-lg font-semibold">Módulo 1</h3>
              <p className="text-gray-500 text-sm">Principiante</p>
              <div className="mt-3">
                <div className="bg-gray-300 w-full h-2 rounded-full relative">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${user.progress}%` }}></div>
                </div>
                <p className="text-right text-sm mt-1">{user.progress}% En progreso</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex-grow min-h-0 overflow-hidden">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Cursos presentados</h3>
              <a href="#" className="text-yellow-500 font-semibold">View all →</a>
            </div>
            <CourseTable courses={user.courses} />
          </div>
        </div>

        <UserProfile />
      </div>
    </main>
  );
};

export default MainContent;
