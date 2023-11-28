import React, { useEffect, useState } from "react";
import axios from "axios";

function NavDashChat() {
  const [usuarios, setUsuarios] = useState([]);
  const tipo = localStorage.getItem("tipo_usuario");

  useEffect(() => {
    if (tipo === "Nutricionista") {
      obtenerNutriologos();
    } else if (tipo === "Paciente") {
      obtenerPacientes();
    }
  }, [tipo]);

  const obtenerNutriologos = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8082/pacientes");
      setUsuarios(respuesta.data.listapacientes);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerPacientes = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8082/nutriologos");
      setUsuarios(respuesta.data.listanutriologos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed container">
        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed top-0 left-0 z-40 w-64 sm:w-1/3 md:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-2 py-2 overflow-y-auto bg-lime-100">
            <ul className="font-medium">
              {usuarios.map((usuario) => (
                <li key={usuario.id} className="flex items-center">
                  <button className="mt-5 p-2 rounded-full bg-purple-300 hover:bg-purple-400">
                    {tipo === "Nutricionista"
                      ? usuario.nombre_paciente
                      : tipo === "Paciente"
                      ? usuario.nombre_nutriologo
                      : ""}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default NavDashChat;
