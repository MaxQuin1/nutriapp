import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Chart } from "react-google-charts";
import NavDashInfo from "../components/NavDashInfo";

export const data = [
  ["Meses", "asistidas", "faltas"],
  ["Enero", 400, 200],
  ["Febrero", 460, 250],
  ["Marzo", 1120, 300],
  ["Abril", 540, 350],
];

export const options = {
  chart: {
    title: "Registro de citas",
    subtitle: "",
  },
};

export const data2 = [
  ["Task", "Hours per Day"],
  ["Huevo", 11],
  ["Brocoli", 2],
  ["Pollo sin grasas", 2],
  ["Manzana", 2],
  ["Ensalada", 7],
];

export const options2 = {
  title: "Alimentos mas recomendados",
};

export default function InfoPaciente() {

  return (
    <>
      <Navbar></Navbar>
      <NavDashInfo></NavDashInfo>
      <h1 className="text-center text-3xl p-2">IMC</h1>
      <button
        style={{ position: "absolute", top: "115px", right: "90px" }}
        className="bg-lime-500 p-2 rounded-lg hover:bg-lime-400"
      >
        Editar
      </button>
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
