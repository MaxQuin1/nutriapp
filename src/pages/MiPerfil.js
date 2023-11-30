import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsPersonCircle } from "react-icons/bs";

function MiPerfil() {
  let persona = JSON.parse(localStorage.getItem("usuario"));
  const id = persona.id_usuarios;
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/usuarios/${id}`
        );

        if (response.data && response.data.usuario) {
          const userData = response.data.usuario;
          if (
            userData.nombre !== nombre ||
            userData.correo !== correo ||
            userData.contrasena !== contrasena
          ) {
            setNombre(userData.nombre);
            setCorreo(userData.correo);
            setContrasena(userData.contrasena);
          }

          const updatedUserData = {
            ...persona,
            nombre: userData.nombre,
            correo: userData.correo,
            contrasena: userData.contrasena,
          };
          localStorage.setItem("usuario", JSON.stringify(updatedUserData));
          setNombre("");
          setCorreo("");
          setContrasena("");
        }
        else{
          alert('No se detectaron cambios')
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        console.log("Respuesta completa:", error.response);
      }
    };

    fetchData();
  }, [id]);

  const Actualizar = async () => {
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
      <div className="fixed container">
        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed top-0 left-0 z-40 w-64 sm:w-1/3 md:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-2 py-2 overflow-y-auto bg-lime-100">
            <ul className="space-y-2 font-medium">
              <li className="flex items-center">
                <button className="mt-5 p-2 rounded-full bg-purple-300 hover:bg-purple-500">
                  Datos de cuenta
                </button>
              </li>
              <Link to="/infopaciente">
                <li className="flex items-center">
                  <button className="p-2 rounded-full bg-purple-300 hover:bg-purple-500">
                    Mis estadísticas
                  </button>
                </li>
              </Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              <li className="flex items-center">
                <BsPersonCircle size="3rem" />
                <div className="ml-2 p-2 border rounded bg-lime-300 hover:bg-lime-500">
                  <a className="w-36 md:w-48 lg:w-60 xl:w-72 font-bold">
                    {persona.nombre}
                  </a>
                  <br />
                  <a className="w-36 md:w-48 lg:w-60 xl:w-72">Cuenta local</a>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="relative">
        <Link to="/">
          <button className="relative ml-[87%] top-10 bg-green-500 p-2 rounded-lg hover:bg-green-400">
            Cerrar sesión
          </button>
        </Link>
        <Link to="/home">
          <button className="ml-[80%] top-10 bg-green-500 p-2 rounded-lg hover:bg-green-400">
            Regresar
          </button>
        </Link>
      </div>
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
    </>
  );
}

export default MiPerfil;
