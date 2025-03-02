const FormTitle = ({ title, subtitle }) => {
  return (
    <div className="text-left mb-6">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

export default FormTitle;
