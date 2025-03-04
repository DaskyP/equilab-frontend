// src/pages/ModuleDetailPage.jsx
import { useParams } from "react-router-dom";
import { modulesData } from "../data/mockData";
import ModuleDetailLayout from "../components/ModuleDetailLayout";

const ModuleDetailPage = () => {
  const { moduleId } = useParams();
  const moduleData = modulesData.find((mod) => mod.id === Number(moduleId));

  if (!moduleData) {
    return (
      <p className="text-center text-red-600 mt-4">
        Módulo con ID={moduleId} no encontrado.
      </p>
    );
  }

  const { moduleTitle, teacher, videoUrl, description, lessons } = moduleData;

  return (
    <ModuleDetailLayout
      title={moduleTitle}
      teacher={teacher}
      videoUrl={videoUrl}
      description={description}
      lessons={lessons}
      searchPlaceholder="Buscar contenido..."
    />
  );
};

export default ModuleDetailPage;
