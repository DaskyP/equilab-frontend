import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("Debes confirmar tu contraseña"),
  });

  const handleSubmit = (values) => {
    console.log("Registrando usuario:", values);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          {/* Botón para registrarse con Google */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continúa con Google
          </button>

          {/* Separador */}
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-100" />
            <span className="px-2 text-gray-500 text-sm">o regístrate con Email</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Field type="email" name="email" className="w-full p-2 border rounded-md border-gray-300" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <Field type="password" name="password" className="w-full p-2 border rounded-md border-gray-300" />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
            <Field type="password" name="confirmPassword" className="w-full p-2 border rounded-md border-gray-300" />
            <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <Field type="checkbox" name="remember" className="w-4 h-4" />
              Recordarme
            </label>
            <a href="#" className="text-blue-500">Olvidaste tu contraseña?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FCED6B] text-dark py-2 rounded-md hover:bg-yellow-600 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Cargando..." : "Registrarse"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
