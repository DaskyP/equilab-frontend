const SearchBar = () => {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Buscar cursos..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-500"
      />
    </div>
  );
};

export default SearchBar;
