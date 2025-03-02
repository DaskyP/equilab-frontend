import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
  });

  const handleSubmit = (values) => {
    console.log("Enviando datos:", values);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <Field type="email" name="email" className="w-full p-2 border rounded-md border-gray-300" placeholder="Correo electrónico" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

          <Field type="password" name="password" className="w-full p-2 border rounded-md border-gray-300" placeholder="Contraseña" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />

          <button type="submit" className="w-full bg-[#FCED6B] text-dark py-2 rounded-md hover:bg-yellow-600 transition" disabled={isSubmitting}>
            {isSubmitting ? "Cargando..." : "Iniciar sesión"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
