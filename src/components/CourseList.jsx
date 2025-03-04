import { Link } from "react-router-dom";

const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: "Módulo 1",
      subtitle: "@Ivan Cabrera",
      thumbnail: "/willy2.png",
      progress: 34,
      isPopular: true,
    },
    {
      id: 2,
      title: "Módulo 1",
      subtitle: "@Ivan Cabrera",
      thumbnail: "/willy2.png",
      progress: 50,
      isPopular: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {courses.map((course) => (
        <Link to={`/modules/${course.id}`} key={course.id}>
          <div className="p-4 rounded-lg shadow-md flex flex-col">
            <div className="relative w-full h-70">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="absolute w-full h-full object-cover rounded-2xl"
              />
              {course.isPopular && (
                <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  ¡Popular!
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-col flex-1">
              <h4 className="text-md font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-500">{course.subtitle}</p>

              <div className="mt-auto">
                <div className="bg-gray-300 w-full h-2 rounded-full">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{course.progress}% En progreso</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
