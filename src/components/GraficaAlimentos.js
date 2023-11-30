import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export default function GraficaAlimentos() {
  // const persona = JSON.parse(localStorage.getItem("usuario"));
  const tipo = localStorage.getItem('tipo_usuario')
  // const [eleccionLocal, setEleccionLocal] = useState("");

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
    <button className="bg-green-500 text-2xl m-6 justify-center r-50 w-10"> Editar </button>
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

// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import { Chart } from "react-google-charts";
// import NavDashInfo from "../components/NavDashInfo";
// import AgregarAlimentos from "../components/AgregarAlimentos";

// export default function InfoPaciente() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userToAdd, setUserToAdd] = useState("");
//   const [users, setUsers] = useState([]);

//   const handleOpenModal = () => {
//     console.log('Abriendo modal');
//     setIsModalOpen(true);
//   };
  
//   const handleCloseModal = () => {
//     console.log('Cerrando modal');
//     setIsModalOpen(false);
//   };

//   const handleConfirmAction = () => {
//     if (userToAdd) {
//       setUsers([...users, userToAdd]);
//       setUserToAdd("");
//     }
//     handleCloseModal(); // Cerrar el modal después de confirmar
//   };

//   const handleUserInputChange = (e) => {
//     setUserToAdd(e.target.value);
//   };

//   const data = [
//     ["Meses", "asistidas", "faltas"],
//     ["Enero", 400, 200],
//     ["Febrero", 460, 250],
//     ["Marzo", 1120, 300],
//     ["Abril", 540, 350],
//   ];

//   const options = {
//     chart: {
//       title: "Registro de citas",
//       subtitle: "",
//     },
//   };

//   const data2 = [
//     ["Task", "Hours per Day"],
//     ["Huevo", 11],
//     ["Brocoli", 2],
//     ["Pollo sin grasas", 2],
//     ["Manzana", 2],
//     ["Ensalada", 7],
//   ];

//   const options2 = {
//     title: "Alimentos más recomendados",
//   };

//   return (
//     <>
//       <Navbar></Navbar>
//       <NavDashInfo></NavDashInfo>
//       <h1 className="text-center text-3xl p-2">IMC</h1>
//       <button
//   onClick={handleOpenModal}
//   className=""
// >
//   Editar
// </button>
//       <AgregarAlimentos
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onConfirm={handleConfirmAction}
//         message="Agrega el alimento"
//         inputPlaceholder="Alimento"
//         inputValue={userToAdd}
//         onInputChange={handleUserInputChange}
//       />

//       <div className="absolute right-[40%]">
//         <Chart
//           chartType="Bar"
//           width="100%"
//           height="400px"
//           data={data}
//           options={options}
//         />
//       </div>

//       <div className="absolute right-[12%]">
//         <Chart
//           chartType="PieChart"
//           data={data2}
//           options={options2}
//           width={"100%"}
//           height={"400px"}
//         />
//       </div>
//     </>
//   );
// }
