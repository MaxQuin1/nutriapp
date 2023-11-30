import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Navbar from "../components/Navbar";
import { BsPersonCircle } from "react-icons/bs";

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
  const persona = JSON.parse(localStorage.getItem("usuario"));
  const [eleccionLocal, setEleccionLocal] = useState("");

  return (
    <>
      <Navbar></Navbar>
      <div className="fixed container">
        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed top-0 left-0 z-40 w-64 sm:w-1/3 md:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-1 py-2 overflow-y-auto bg-lime-100">
            <ul className="space-y-2 font-medium">
              <li className="flex items-center">
                <button
                  className="mt-5 p-2 rounded-full bg-purple-400 w-[30%] hover:bg-purple-500"
                  onClick={() => setEleccionLocal("IMC")}
                >
                  IMC
                </button>
              </li>
              <li className="flex items-center">
                <button
                  className="p-2 rounded-full bg-purple-400 w-[30%] hover:bg-purple-500"
                  onClick={() => setEleccionLocal("Citas")}
                >
                  Citas
                </button>
              </li>
              <li className="flex items-center">
                <button
                  className="p-2 rounded-full bg-purple-400 w-[50%] hover:bg-purple-500"
                  onClick={() => setEleccionLocal("Alimentos")}
                >
                  Alimentos
                </button>
              </li>
              <li className="flex items-center">
                <BsPersonCircle size="3rem" />
                <div className="ml-2 p-2 border rounded bg-lime-300 hover:bg-lime-500">
                  <a className="w-36 md:w-48 lg:w-60 xl:w-72">
                    {persona.nombre}
                  </a>
                  <br />
                  <a className="w-36 md:w-48 lg:w-60 xl:w-72">Cuenta local</a>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <h1 className="text-center text-3xl p-2">{eleccionLocal}</h1>
      <button
        style={{ position: "absolute", top: "115px", right: "90px" }}
        className="bg-lime-300 p-2 rounded-lg hover:bg-lime-500"
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
