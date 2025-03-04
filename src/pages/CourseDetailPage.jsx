import React from "react";
import { useParams } from "react-router-dom";
import { coursesData } from "../data/mockData"; 
import ModuleDetailLayout from "../components/ModuleDetailLayout"; 

function CourseDetailPage() {
  const { courseId } = useParams();
  const courseData = coursesData.find((c) => c.id === Number(courseId));

  if (!courseData) {
    return <p>Curso no encontrado</p>;
  }

  return (
    <ModuleDetailLayout
      title={courseData.title}
      teacher={courseData.teacher}
      videoUrl={courseData.videoUrl}
      description={courseData.description}
      lessons={courseData.lessons}
    />
  );


}

export default CourseDetailPage;
