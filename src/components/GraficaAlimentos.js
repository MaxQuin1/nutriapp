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
