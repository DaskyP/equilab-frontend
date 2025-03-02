const ScoreCard = ({ score }) => {
    return (
      <div
        className="relative flex items-center justify-between p-6 rounded-lg shadow-md bg-cover bg-center h-full"
        style={{ backgroundImage: "url('/bg-calification.png')" }}
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{score} Calificación promedio</h3>
          <p className="text-gray-600 text-sm">Mejor que el 20% de Estudiantes.</p>
        </div>
  
        <div className="absolute right-2 bottom-2 w-32">
          <img src="/hojas.svg" alt="Hojas decorativas" className="w-full opacity-90" />
        </div>
      </div>
    );
  };
  
  export default ScoreCard;
  