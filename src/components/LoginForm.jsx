import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = () => {
  const navigate = useNavigate(); 

  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
  });

  const handleSubmit = (values) => {
    console.log("Enviando datos:", values);

    setTimeout(() => {
      navigate("/dashboard"); 
    }, 1000);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continúa con Google
          </button>

          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-100" />
            <span className="px-2 text-gray-500 text-sm">o inicia sesión con Email</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <Field type="email" name="email" className="w-full p-2 border rounded-md border-gray-300" placeholder="Correo electrónico" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <Field type="password" name="password" className="w-full p-2 border rounded-md border-gray-300" placeholder="Contraseña" />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <Field type="checkbox" name="remember" className="w-4 h-4" />
              Recordarme
            </label>
            <a href="#" className="text-blue-500">Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="w-full bg-[#FCED6B] text-dark py-2 rounded-md hover:bg-yellow-600 transition" disabled={isSubmitting}>
            {isSubmitting ? "Cargando..." : "Iniciar sesión"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
