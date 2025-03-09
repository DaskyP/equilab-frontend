import React, { useState } from "react";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa"; 

const UserProfilePage = () => {
  const [user, setUser] = useState({
    name: "Rodrigo Gogi",
    email: "rodrigo@example.com",
    password: "",
    institution: "Universidad XYZ",
    role: "Estudiante Universitario",
    registrationDate: "01/01/2024",
    newPassword: "",
    language: "Español",
    profileImage: "/avatar-placeholder.png",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profileImage: imageUrl });
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full h-full max-w-full grid grid-cols-[2fr_1fr] gap-10">
        
        <div className="flex flex-col flex-grow">
          <h1 className="text-3xl font-bold">Perfil</h1>
          <p className="text-gray-500 mb-6">Administra tu perfil</p>

          <h2 className="text-lg font-semibold">Datos Personales</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              { label: "Nombre", name: "name", type: "text" },
              { label: "Correo Electrónico", name: "email", type: "email" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-gray-600 text-sm mb-1">{label}</label>
                <div className="relative">
                  <input
                    type={type}
                    name={name}
                    value={user[name]}
                    onChange={handleInputChange}
                    className="w-full bg-yellow-200 p-2 rounded-lg pr-8 transition focus:bg-yellow-100"
                  />
                  <FaEdit className="absolute top-2.5 right-2 text-gray-500 text-sm" />
                </div>
              </div>
            ))}
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm mb-1">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={handleInputChange}
                className="w-full bg-yellow-200 p-2 rounded-lg transition focus:bg-yellow-100"
              />
            </div>
          </div>

          <h2 className="text-lg font-semibold mt-6">Datos Adicionales</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              { label: "Institución / Empresa", name: "institution", type: "text" },
              { label: "Rol", name: "role", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-gray-600 text-sm mb-1">{label}</label>
                <div className="relative">
                  <input
                    type={type}
                    name={name}
                    value={user[name]}
                    onChange={handleInputChange}
                    className="w-full bg-yellow-200 p-2 rounded-lg pr-8 transition focus:bg-yellow-100"
                  />
                  <FaEdit className="absolute top-2.5 right-2 text-gray-500 text-sm" />
                </div>
              </div>
            ))}
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm mb-1">Fecha de Registro</label>
              <input
                type="text"
                name="registrationDate"
                value={user.registrationDate}
                disabled
                className="w-full bg-yellow-300 p-2 rounded-lg cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center h-full">
          <div className="bg-white p-6 rounded-xl shadow-md w-full flex flex-col items-center border border-gray-300">
            <div className="w-28 h-28 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-semibold mt-4">{user.name}</p>
            <p className="text-gray-500">{user.role}</p>
            <label className="mt-4 bg-gray-200 px-3 py-1 rounded-lg cursor-pointer text-sm flex items-center gap-2">
              <FaUpload className="text-xs" /> Subir imagen
              <input type="file" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>

          <div className="mt-6 w-full">
            <h2 className="text-lg font-semibold">Configuraciones y Preferencias</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { label: "Nueva Contraseña", name: "newPassword", type: "password" },
                { label: "Idioma", name: "language", type: "text" },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-gray-600 text-sm mb-1">{label}</label>
                  <div className="relative">
                    <input
                      type={type}
                      name={name}
                      value={user[name]}
                      onChange={handleInputChange}
                      className="w-full bg-yellow-200 p-2 rounded-lg pr-8 transition focus:bg-yellow-100"
                    />
                    <FaEdit className="absolute top-2.5 right-2 text-gray-500 text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mt-6 flex justify-between">
            <button className="bg-red-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-red-600 transition flex items-center gap-2 text-sm">
              <FaTrash className="text-xs" /> ELIMINAR CUENTA
            </button>
            <div className="flex gap-4">
              <button className="bg-gray-300 text-gray-700 px-3 py-2 rounded-lg shadow-md hover:bg-gray-400 transition text-sm">
                Cancelar
              </button>
              <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition text-sm">
                Guardar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
