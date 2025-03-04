import ProgressBar from "./ProgressBar";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col space-y-2">
      <div className="relative">
        <img src={course.thumbnail} alt={course.title} className="rounded-lg w-full object-cover" />
        {course.isPopular && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-lg">
            ¡Popular!
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-500">@{course.author}</p>

        <ProgressBar progress={course.progress} />
      </div>
    </div>
  );
};

export default CourseCard;
