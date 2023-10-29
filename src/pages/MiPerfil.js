import React from "react";
import Navbar from "../components/Navbar";
import NavDash from "../components/NavDash";

function MiPerfil() {
  return (
    <>
      <Navbar />
      <NavDash />
      <div className="h-screen bg-cover bg-center relative">
        <button className="absolute top-12 right-4 bg-green-500 p-2 rounded-lg">
          Back
        </button>
        <div className="flex items-center justify-center h-full">
          <div className="max-w-md w-full rounded-lg p-6 bg-white shadow-lg">
            <h1 className="text-5xl font-bold mb-4">Datos de Cuenta</h1>
            <div className="mb-2">
              <h1 className="p-2">Nombre de Usuario</h1>
              <input className="w-full border rounded-lg p-2" />
            </div>
            <div className="mb-2">
              <h1 className="p-2">Correo Electrónico</h1>
              <input className="w-full border rounded-lg p-2" />
            </div>
            <div className="mb-2">
              <h1 className="p-2">Cambiar la Contraseña</h1>
              <input className="w-full border rounded-lg p-2" />
            </div>
            <div className="mb-2">
              <h1 className="p-2">Ingrese un Número de Teléfono</h1>
              <input className="w-full border rounded-lg p-2" />
            </div>
            <button className="bg-yellow-200 p-2 text-center rounded-lg">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiPerfil;
