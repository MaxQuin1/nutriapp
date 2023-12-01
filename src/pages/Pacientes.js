import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pacientes() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [pacientes, setPacientes] = useState([]);
  const [nuevoToken, setNuevoToken] = useState("");

  const generarToken = (longitud) => {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+";
    let token = "";
    for (let i = 0; i < longitud; i++) {
      token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return token;
  };

  const crearNuevoToken = () => {
    const tokenGenerado = generarToken(8);
    setNuevoToken(tokenGenerado);
    axios.post("http://localhost:8082/token", {
      token: tokenGenerado,
      nutriologo: usuario.id_usuarios,
    });
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:8082/pacientes")
      .then((respuesta) => {
        setPacientes(respuesta.data.listapacientes);
      })
      .catch((error) => console.log(error));
  }, []);

  function cardPerson({ id, nombre }) {
    return (
      <div className="bg-purple-500 p-2 w-4/5 rounded-lg m-2 flex items-center">
        <Link to={id}>
          <BsPersonCircle size="4rem" />
        </Link>
        <p className="ml-2">{nombre}</p>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen bg-cover bg-center relative" id="mydiv">
        <Navbar />
        {/* <div className=" flex m-3 w-0 bg-white border px-4 rounded"> */}
          {/* <input placeholder="Buscar" /> */}
          <button
            className="bg-purple-400 p-2 flex m-3 px-4 rounded"
            onClick={crearNuevoToken}
          >
            Generar Token
          </button>
        {/* </div> */}
          {nuevoToken ? (
            <>
            <div className="flex relative bg-red-100 ml-4 p-2 w-[12%] rounded">
              <p>Nuevo token:</p>
              <p className="ml-4 bg-red-400 rounded p-2">{nuevoToken}</p>
              </div>
            </>
          ) : null}
        <div className="h-[80vh] flex flex-col items-center p-2 text-white bg-lime-100 mt-3 overflow-y-auto">
          {pacientes && pacientes.length > 0 ? (
            pacientes.map((paciente, index) =>
              cardPerson({
                key: paciente.id, 
                id: paciente.id,
                nombre: paciente.nombre_paciente,
              })
            )
          ) : (
            <p>No hay pacientes disponibles.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Pacientes;
