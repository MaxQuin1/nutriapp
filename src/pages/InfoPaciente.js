import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Chart } from "react-google-charts";
import NavDashInfo from "../components/NavDashInfo";
import AgregarAlimentos from "../components/AgregarAlimentos";

export default function InfoPaciente() {
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

  const data = [
    ["Meses", "asistidas", "faltas"],
    ["Enero", 400, 200],
    ["Febrero", 460, 250],
    ["Marzo", 1120, 300],
    ["Abril", 540, 350],
  ];

  const options = {
    chart: {
      title: "Registro de citas",
      subtitle: "",
    },
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
    title: "Alimentos más recomendados",
  };

  return (
    <>
      <Navbar></Navbar>
      <NavDashInfo></NavDashInfo>
      <h1 className="text-center text-3xl p-2">IMC</h1>
      <button
  onClick={handleOpenModal}
  className=""
>
  Editar
</button>
      <AgregarAlimentos
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAction}
        message="Agrega el alimento"
        inputPlaceholder="Alimento"
        inputValue={userToAdd}
        onInputChange={handleUserInputChange}
      />

      <div className="absolute right-[40%]">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>

      <div className="absolute right-[12%]">
        <Chart
          chartType="PieChart"
          data={data2}
          options={options2}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </>
  );
}
