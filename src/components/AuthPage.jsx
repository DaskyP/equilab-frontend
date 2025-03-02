import { Link } from "react-router-dom";
import FormTitle from "./FormTitle";

const AuthPage = ({ title, subtitle, formComponent: FormComponent, svgs, linkText, linkTo }) => {
  return (
    <div className="h-screen grid grid-cols-5">
      <div className="col-span-3 h-full relative ">
        {svgs.map((svg, index) => (
          <img
            key={index}
            src={svg.src}
            alt={svg.alt}
            className={`absolute w-[45%] h-[45%] max-w-sm sm:max-w-md md:max-w-lg ${svg.position}`}
          />
        ))}
      </div>

      <div className="col-span-2 flex items-center justify-center h-full bg-white relative">
        <div className="w-4/5 max-w-md">
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-10" />
            <span className="text-3xl font-bold text-gray-800">EQUILAB</span>
          </div>

          <img
            src="/smile.svg"
            alt="Smiley Face"
            className="absolute top-6 right-6 w-16 sm:w-20 md:w-24"
          />

          <FormTitle title={title} subtitle={subtitle} />
          <FormComponent />

          <p className="text-sm text-center mt-6 text-gray-600">
            {title === "Crea una cuenta"
              ? "¿Ya tienes una cuenta?"
              : "¿No tienes una cuenta?"}
            <Link
              to={linkTo}
              className="text-red-500 font-semibold ml-1 hover:underline"
            >
              {linkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
