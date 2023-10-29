import React from "react";
import Navbar from "../components/Navbar";
import NavDash from "../components/NavDash";

function MiPerfil() {
  return (
    <>
     <Navbar />
        <NavDash />
        <div className="h-screen bg-cover bg-center" id='mydiv'>
          <button style={{ position: 'absolute', top: '90px', right: '100px' }} className="bg-green-500 p-2 rounded-lg">Back</button>
          <h1 style={{ position: 'absolute', top: '450px', right: '200px' }} className="text-5xl font-bold">Datos de cuenta</h1>
      <div className="flex items-center justify-center h-full">
        <div className="max-w-md w-full rounded-lg p-6 bg-white shadow-lg">
          <div className="mb-2">
          <h1 className="p-2">Nombre Usuario</h1>
          <input className="w-full border rounded-lg p-2"></input>
          </div>
          <dvi className="mb-2">
            <h1 className="p-2">Correo</h1>
            <input className="w-full border rounded-lg p-2"></input>
          </dvi>
          <div className="mb-2">
            <h1 className="p-2">Cambiar la contraseña</h1>
            <input className="w-full border rounded-lg p-2"></input>
          </div>
          <div className="mb-2">
            <h1 className="p-2">Ingrese un numero de telefono</h1>
            <input className="w-full border rounded-lg p-2"></input>
          </div>
          <button className="bg-yellow-200 p-2 text-center rounded-lg">Guardar cambios</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default MiPerfil;
