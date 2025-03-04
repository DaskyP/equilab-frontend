import SearchBar from "../components/SearchBar";
import CourseList from "../components/CourseList";

const CoursesPage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div>
        <h2 className="text-4xl font-semibold">Cursos</h2>
        <p className="text-gray-500 text-md">¡Descubre todos los cursos que puedes aprender!</p>
      </div>

      <SearchBar />

      <div className="mt-6 p-6 rounded-lg flex flex-col">
        <h3 className="text-xl font-semibold mb-4">Nombre del Curso</h3>
        <CourseList />
      </div>
    </div>
  );
};

export default CoursesPage;
