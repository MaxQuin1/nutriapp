import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export default function GraficaCitas() {
  // const persona = JSON.parse(localStorage.getItem("usuario"));
  // const [eleccionLocal, setEleccionLocal] = useState("");

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
  return (
    <>
      <div className="absolute right-[33%] top-40">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </>
  );
}
