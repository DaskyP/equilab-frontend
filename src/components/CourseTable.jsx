const CourseTable = ({ courses }) => {
    return (
      <div className="overflow-x-auto w-full">
        <table className="w-full mt-4 text-left">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="pb-2">Nombre del Curso</th>
              <th className="pb-2">Inicio</th>
              <th className="pb-2">Calificación</th>
              <th className="pb-2">Tipo</th>
              <th className="pb-2">Guardar</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-t text-md">
                <td className="py-3 flex items-center gap-2">
                  <img src="/course-icon.svg" alt="Curso" className="w-8 h-8" />
                  {course.name}
                </td>
                <td>{course.date}</td>
                <td className="text-yellow-500 font-semibold">⭐ {course.rating}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === "Avanzado" ? "bg-yellow-200" : course.level === "Medio" ? "bg-gray-200" : "bg-green-200"
                    }`}
                  >
                    {course.level}
                  </span>
                </td>
                <td>
                  <button>
                    {course.bookmarked ? "🔖" : "📄"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CourseTable;
  