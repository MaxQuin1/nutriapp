import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import EditarAlimento from "./EditarAlimento";

export default function GraficaAlimentos() {
  const tipo = localStorage.getItem("tipo_usuario");
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState("");
  const [comidas, setComidas] = useState([]);
  const [alimento, setAlimento] = useState("");
  const [dias, setDias] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedComidaId, setSelectedComidaId] = useState(null);

  const handleOpenModal = (comidaId) => {
    console.log("Abriendo modal");
    setSelectedComidaId(comidaId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Cerrando modal");
    setSelectedComidaId(null);
    setIsModalOpen(false);
  };

  const handleConfirmAction = (userToAdd) => {
    if (userToAdd) {
      // Realiza la acción con el id y el userToAdd específicos
      // ... tu lógica aquí

      setUsers([...users, userToAdd]);
    }
    handleCloseModal();
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/comidas")
      .then((respuesta) => {
        console.log("Respuesta de comidas:", respuesta.data);
        setComidas(respuesta.data.listacomidas);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8082/pacientes")
      .then((respuesta) => {
        console.log("Respuesta de pacientes:", respuesta.data);
        setPacientes(respuesta.data.listapacientes);
      })
      .catch((error) => console.log(error));
  }, []);

  const agregarAlimento = async () => {
    try {
      if (alimento === "" || dias === "") {
        alert("Se detectó un campo vacío");
        return;
      } else if (comidas.length <= 8) {
        const respuesta = await axios.post("http://localhost:8082/comidas", {
          id_paciente: paciente.id_paciente,
          nombre_alimento: alimento,
          cantidad_dias: dias,
        });
        setComidas([...comidas, respuesta.data.nuevoAlimento]);
        alert(JSON.stringify(respuesta.data.message));
      } else {
        alert("No se pueden ingresar más de 8 comidas");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarAlimento = async (id) => {
    if (comidas.length >= 3) {
      try {
        const respuesta = await axios.delete(
          `http://localhost:8082/comidas/${id}`
        );
        console.log(respuesta.data);
        setComidas(comidas.filter((comida) => comida.id_alimento !== id));
        alert("Alimento eliminado");
      } catch (error) {
        console.error("Error al eliminar el alimento:", error);
        alert(
          "Hubo un error al intentar eliminar el alimento. Por favor, inténtelo de nuevo."
        );
      }
    } else {
      alert("No se puede eliminar si solo quedan dos datos alimentos");
      return;
    }
  };

  let contenido;

  if (tipo === "Nutricionista") {
    contenido = (
      <div
        className="flex items-center justify-center h-full"
        style={{ position: "absolute", top: "60px", right: "50px" }}
      >
        <div className="max-w-md w-full rounded-lg p-6 bg-white shadow-lg">
          <h1 className="text-5xl font-bold mb-4">Gestion de Alimentos</h1>
          <div className="mb-2">
            <label className="p-2 mb-2">Introduzca un alimento</label>
            <button
              className="bg-purple-300 ml-10 p-2 text-center rounded-lg hover:bg-purple-400"
              onClick={agregarAlimento}
            >
              Agregar
            </button>
            <div className="flex">
              <div className="flex-1">
                <input
                  className="w-full border rounded-lg p-2"
                  placeholder="Alimento"
                  type="text"
                  value={alimento}
                  onChange={(e) => setAlimento(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <input
                  className="w-full border rounded-lg p-2"
                  placeholder="Dias"
                  type="number"
                  value={dias}
                  onChange={(e) => setDias(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <select
                  value={paciente}
                  onChange={(e) => setPaciente(e.target.value)}
                  className="w-full border rounded-lg p-2"
                  placeholder="Paciente"
                >
                  {pacientes.map((paciente) => (
                    <option
                      key={paciente.id_paciente}
                      value={paciente.id_paciente}
                    >
                      {paciente.nombre_paciente}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <h2 className="p-2">Alimentos</h2>
            {comidas.map((comida) => (
              <div
                className="flex items-center space-x-4 p-2 border rounded bg-gray-200 hover:bg-gray-300"
                key={comida.id_alimento}
              >
                <p className="flex-1">{comida.nombre_alimento}</p>
                <button
                  className="bg-gray-400 p-2 rounded-lg hover:bg-gray-500"
                  onClick={() => handleOpenModal(comida.id_alimento)}
                >
                  Actualizar
                </button>
                <EditarAlimento
                  key={selectedComidaId}
                  id={comida.id_alimento}
                  nombre={comida.nombre_alimento}
                  dias={comida.cantidad_dias}
                  isOpen={
                    isModalOpen && selectedComidaId === comida.id_alimento
                  }
                  onClose={handleCloseModal}
                  onConfirm={(userToAdd) => handleConfirmAction(userToAdd)}
                  message={comida.nombre_alimento}
                  inputPlaceholder={comida.nombre_alimento}
                />
                <button
                  className="bg-gray-400 p-2 rounded-lg hover:bg-gray-500"
                  onClick={() => eliminarAlimento(comida.id_alimento)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const primerComida =
    comidas.length > 0
      ? [comidas[0].nombre_alimento, comidas[0].cantidad_dias]
      : [];
  const segundaComida =
    comidas.length > 1
      ? [comidas[1].nombre_alimento, comidas[1].cantidad_dias]
      : [];
  const terceraComida =
    comidas.length > 2
      ? [comidas[2].nombre_alimento, comidas[2].cantidad_dias]
      : [];
  const cuartaComida =
    comidas.length > 3
      ? [comidas[3].nombre_alimento, comidas[3].cantidad_dias]
      : [];
  const quintaComida =
    comidas.length > 4
      ? [comidas[4].nombre_alimento, comidas[4].cantidad_dias]
      : [];
  const sextaComida =
    comidas.length > 5
      ? [comidas[5].nombre_alimento, comidas[5].cantidad_dias]
      : [];
  const septimaComida =
    comidas.length > 6
      ? [comidas[6].nombre_alimento, comidas[6].cantidad_dias]
      : [];
  const octavaComida =
    comidas.length > 7
      ? [comidas[7].nombre_alimento, comidas[7].cantidad_dias]
      : [];

  const data = [
    ["Task", "Hours per Day"],
    ...(primerComida && primerComida.length > 0 ? [primerComida] : []),
    ...(segundaComida && segundaComida.length > 0 ? [segundaComida] : []),
    ...(terceraComida && terceraComida.length > 0 ? [terceraComida] : []),
    ...(cuartaComida && cuartaComida.length > 0 ? [cuartaComida] : []),
    ...(quintaComida && quintaComida.length > 0 ? [quintaComida] : []),
    ...(sextaComida && sextaComida.length > 0 ? [sextaComida] : []),
    ...(septimaComida && septimaComida.length > 0 ? [septimaComida] : []),
    ...(octavaComida && octavaComida.length > 0 ? [octavaComida] : []),
  ];

  const options = {
    title: "Alimentos más recomendados",
  };

  return (
    <div>
      {contenido}
      <div className="absolute left-[28%] border top-40">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
}
