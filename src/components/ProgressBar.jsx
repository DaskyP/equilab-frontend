const ProgressBar = ({ progress }) => {
    return (
      <div className="mt-2">
        <div className="w-full bg-gray-300 h-2 rounded-full">
          <div className="h-2 bg-yellow-500 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{progress}% En progreso</p>
      </div>
    );
  };
  
  export default ProgressBar;
  