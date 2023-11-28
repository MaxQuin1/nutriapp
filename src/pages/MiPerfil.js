import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NavDash from "../components/NavDash";
import { Link } from "react-router-dom";
import axios from "axios";

function MiPerfil() {
  let persona = JSON.parse(localStorage.getItem("usuario"));
  const id = persona.id_usuarios;
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/usuarios/${id}`);
        if (response.data && response.data.usuario) {
          const userData = response.data.usuario;
  
          const updatedUserData = { ...persona, nombre: userData.nombre, correo: userData.correo, contrasena: userData.contrasena};
          localStorage.setItem("usuario", JSON.stringify(updatedUserData));
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        console.log("Respuesta completa:", error.response);
      }
    };
  
    fetchData();
  }, [id, nombre, correo, contrasena]);

  const Actualizar = async () => {
    console.log("Botón de Guardar Cambios clickeado");
    await axios
      .put(`http://localhost:8082/usuarios/${id}`, {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          alert("Usuario actualizado con éxito");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
    setNombre("");
    setCorreo("");
    setContrasena("");
  };

  return (
    <>
      <Navbar />
      <NavDash />
      <div className="h-screen bg-cover bg-center relative">
        <Link to="/">
          <button className="relative ml-[90%] mt-2 bg-green-500 p-2 rounded-lg hover:bg-green-400">
            Cerrar sesion
          </button>
        </Link>
        <Link to="/home">
          <button className="relative ml-[90%] mt-2 bg-green-500 p-2 rounded-lg hover:bg-green-400">
            Regresar
          </button>
        </Link>
        <div className="flex items-center justify-center h-full">
          <div className="max-w-md w-full rounded-lg p-6 bg-white shadow-lg">
            <h1 className="text-5xl font-bold mb-4">Datos de Cuenta</h1>
            <div className="mb-2">
              <h1 className="p-2">Nombre de Usuario</h1>
              <input
                className="w-full border rounded-lg p-2"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
            </div>
            <div className="mb-2">
              <h1 className="p-2">Correo Electrónico</h1>
              <input
                className="w-full border rounded-lg p-2"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
              />
            </div>
            <div className="mb-2">
              <h1 className="p-2">Cambiar la Contraseña</h1>
              <input
                className="w-full border rounded-lg p-2"
                type="password"
                onChange={(e) => setContrasena(e.target.value)}
                value={contrasena}
              />
            </div>
            <button
              className="bg-yellow-200 p-2 text-center rounded-lg hover:bg-yellow-100"
              onClick={Actualizar}
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiPerfil;
