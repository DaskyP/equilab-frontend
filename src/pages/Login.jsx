import AuthPage from "../components/AuthPage";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const loginSvgs = [
    { src: "/imagenlogin1.svg", alt: "Nube sonriente", position: "top-[2%] left-[1%]" },
    { src: "/imagenlogin2.svg", alt: "Espiral", position: "top-[2%] right-[1%]" },
    { src: "/imagenlogin3.svg", alt: "Avión de papel", position: "bottom-[1%] left-[1%]" },
    { src: "/imagenlogin4.svg", alt: "Estrella", position: "bottom-[1%] right-[1%]" },
  ];

  return (
    <AuthPage
      title="Inicia sesión"
      subtitle="¡Ve qué puedes aprender hoy!"
      formComponent={LoginForm}
      svgs={loginSvgs}
      linkText="Crear una cuenta aquí"
      linkTo="/register"
    />
  );
};

export default Login;
