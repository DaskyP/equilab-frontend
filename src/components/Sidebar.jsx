import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen p-8 flex flex-col rounded-r-3xl ">
      <div className="flex items-center gap-3 mb-12">
        <img src="/logo.svg" alt="Logo" className="w-10" />
        <span className="text-2xl font-bold text-gray-800">EQUILAB</span>
      </div>

      <nav className="flex-1 space-y-8 text-xl font-medium">
        <Link to="/dashboard" className="flex items-center gap-4 text-dark hover:text-green-600">
          <img src="/dashboard.svg" alt="Resumen" className="w-6 h-6" />
          <span>Resumen</span>
        </Link>
        <Link to="/courses" className="flex items-center gap-4 text-dark hover:text-green-600">
          <img src="/cursos.svg" alt="Cursos" className="w-6 h-6" />
          <span>Cursos</span>
        </Link>
        <Link to="/modulos" className="flex items-center gap-4 text-dark hover:text-green-600">
          <img src="/modulos.svg" alt="Módulos" className="w-6 h-6" />
          <span>Módulos</span>
        </Link>
        <Link to="/estadisticas" className="flex items-center gap-4 text-dark hover:text-green-600">
          <img src="/stats.svg" alt="Estadísticas" className="w-6 h-6" />
          <span>Estadísticas</span>
        </Link>
        <Link to="/configuracion" className="flex items-center gap-4 text-dark hover:text-green-600">
          <img src="/settings.svg" alt="Configuración" className="w-6 h-6" />
          <span>Configuración</span>
        </Link>
      </nav>

      <button className="mt-auto flex items-center gap-4 text-dark hover:text-red-700 text-lg font-medium">
        <img src="/logout.svg" alt="Cerrar sesión" className="w-6 h-6" />
        <span>Cerrar sesión</span>
      </button>
    </aside>
  );
};

export default Sidebar;
