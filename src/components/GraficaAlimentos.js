import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import AgregarAlimentos from "./AgregarAlimentos";

export default function GraficaAlimentos() {
const tipo = localStorage.getItem('tipo_usuario')
const [isModalOpen, setIsModalOpen] = useState(false);
const [userToAdd, setUserToAdd] = useState("");
const [users, setUsers] = useState([]);

const handleOpenModal = () => {
  console.log('Abriendo modal');
  setIsModalOpen(true);
};
  
const handleCloseModal = () => {
  console.log('Cerrando modal');
  setIsModalOpen(false);
};

const handleConfirmAction = () => {
  if (userToAdd) {
    setUsers([...users, userToAdd]);
    setUserToAdd("");
  }
  handleCloseModal(); // Cerrar el modal después de confirmar
};

const handleUserInputChange = (e) => {
  setUserToAdd(e.target.value);
};

  const data2 = [
    ["Task", "Hours per Day"],
    ["Huevo", 11],
    ["Brocoli", 2],
    ["Pollo sin grasas", 2],
    ["Manzana", 2],
    ["Ensalada", 7],
  ];

  const options2 = {
    title: "Alimentos mas recomendados",
  };

  let contenido

  if(tipo === 'Nutricionista'){
    contenido = (
        <button
        onClick={handleOpenModal}
        style={{ position: "absolute", top: "115px", right: "90px" }}
        className="bg-lime-300 p-2 rounded-lg hover:bg-lime-500"
      >
        Editar
      </button>
    )
  }

  return (
    <div>
    <div className="bg-green-200 w-full ">

    <AgregarAlimentos
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    onConfirm={handleConfirmAction}
    message="Agrega tu comentario"
    inputPlaceholder="Comentario"
    inputValue={userToAdd}
    onInputChange={handleUserInputChange}
    />
    </div>
      {contenido}
      <div className="absolute right-[33%] border top-40">
        <Chart
          chartType="PieChart"
          data={data2}
          options={options2}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
}
