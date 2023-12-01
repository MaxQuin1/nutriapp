/* global google */

import React, { useState, useEffect } from "react";
import IMC from "../img/imc.jpeg"
const Modal = ({ isOpen, onClose, onSave }) => {
  const [nuevosDatos, setNuevosDatos] = useState({
    mes: 0,
    peso: 0,
    altura: 0,
  });

  const handleChange = (e) => {
    setNuevosDatos({
      ...nuevosDatos,
      [e.target.name]:
        e.target.name === "mes"
          ? parseInt(e.target.value, 10)
          : parseFloat(e.target.value),
    });
  };

  const handleSave = () => {
    onSave(nuevosDatos);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>

      <div className="modal-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 p-4 rounded shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mes:
          </label>
          <input
            type="number"
            name="mes"
            value={nuevosDatos.mes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Peso en kilogramos:
          </label>
          <input
            type="number"
            name="peso"
            placeholder="peso: kg"
            value={nuevosDatos.peso}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Altura en metros:
          </label>
          <input
            type="number"
            name="altura"
            placeholder="altura: m"
            value={nuevosDatos.altura}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Guardar
          </button>
          <button
            className="ml-2 text-gray-600 hover:text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

const GraficaImc = () => {
  const [data, setData] = useState([
    ["Mes", "Peso", "Altura", "IMC"],
    [1, 67.6, 1.63, 67.6 * 1.63 ** 2],
    [2, 75.3, 1.65, 75.3 * 1.65 ** 2],
    [3, 69.1, 1.67, 69.1 * 1.67 ** 2],
    [4, 63.3, 1.68, 63.3 * 1.68 ** 2],
    [5, 67.6, 1.7, 67.6 * 1.7 ** 2],
    [6, 75.3, 1.73, 75.3 * 1.73 ** 2],
    [7, 69.1, 1.73, 69.1 * 1.73 ** 2],
    [8, 63.3, 1.74, 63.3 * 1.74 ** 2],
    [9, 67.6, 1.74, 67.6 * 1.74 ** 2],
    [10, 75.3, 1.75, 75.3 * 1.75 ** 2],
    [11, 69.1, 1.75, 69.1 * 1.75 ** 2],
    [12, 63.3, 1.75, 63.3 * 1.75 ** 2],
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.async = true;

    script.onload = () => {
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]); // Agregar 'data' a las dependencias del efecto para que se ejecute cuando 'data' cambie

  const drawChart = () => {
    const chartData = google.visualization.arrayToDataTable(data);

    const options = {
      title: "Calculo de IMC",
      curveType: "function",
      legend: { position: "bottom" },
    };

    const chart = new google.visualization.LineChart(
      document.getElementById("lineChart")
    );

    chart.draw(chartData, options);
  };

  const handleEditarClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveModal = (nuevosDatos) => {
    const mesIndex = nuevosDatos.mes;
    setData((prevData) => {
      const newData = [...prevData];
      newData[mesIndex] = [
        mesIndex,
        nuevosDatos.peso,
        nuevosDatos.altura,
        nuevosDatos.peso / nuevosDatos.altura ** 2,
      ];
      return newData;
    });
    alert("Gráfica actualizada");
  };

  let contenido;

  const tipo = localStorage.getItem("tipo_usuario");

  if (tipo === "Nutricionista") {
    contenido = (
      <button
        style={{ position: "absolute", top: "115px", right: "90px" }}
        className="bg-lime-300 p-2 rounded-lg hover:bg-lime-500"
        onClick={handleEditarClick}
      >
        Editar
      </button>
    );
  }

  return (
    <div>
      {contenido}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveModal}
      />
      <div className="w-full max-w-screen-lg ml-[30%] my-10">
        <div id="lineChart" className="w-[50%] h-64 border"></div>
      </div>
      <img src={IMC} alt="imc" className="object-fill inset-y-0 ml-[30%] my-10 right-0 w-[30%] h-[30%] items-center"/>
    </div>
  );
};

export default GraficaImc;
