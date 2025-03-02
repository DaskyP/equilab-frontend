import AuthPage from "../components/AuthPage";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const registerSvgs = [
    { src: "/imagenregister3.svg", alt: "Nube ss", position: "top-[2%] left-[1%]" },
    { src: "/imagenregister2.svg", alt: "Espiral diferente", position: "top-[2%] right-[1%]" },
    { src: "/imagenregister1.svg", alt: "Avión diferente", position: "bottom-[1%] left-[1%]" },
    { src: "/imagenregister4.svg", alt: "Estrella diferente", position: "bottom-[1%] right-[1%]" },
  ];

  return (
    <AuthPage
      title="Crea una cuenta"
      subtitle="Únete y aprende nuevas habilidades"
      formComponent={RegisterForm}
      svgs={registerSvgs}
      linkText="Inicia sesión aquí"
      linkTo="/"
    />
  );
};

export default Register;
