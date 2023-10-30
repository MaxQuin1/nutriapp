import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);

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
        <div className="m-5 w-[15%] bg-white border p-2 rounded">
          <input placeholder="Buscar" />
        </div>
        <div className="mt-20 h-[60vh] flex flex-col items-center p-2 bg-lime-100 overflow-y-auto">
          {pacientes.map((paciente, index) =>
            cardPerson({
              key: paciente.index,
              id: paciente.id,
              nombre: paciente.nombre_paciente,
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Pacientes;
