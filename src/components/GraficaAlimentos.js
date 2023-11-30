import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export default function GraficaAlimentos() {
  const tipo = localStorage.getItem("tipo_usuario");
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/comidas")
      .then((respuesta) => {
        setComidas(respuesta.data.listacomidas);
      })
      .catch((error) => console.log(error));
  }, []);

  let contenido;

  if (tipo === "Nutricionista") {
    contenido = (
      <button
        style={{ position: "absolute", top: "115px", right: "90px" }}
        className="bg-lime-300 p-2 rounded-lg hover:bg-lime-500"
      >
        Editar
      </button>
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

  const data2 = [["Task", "Hours per Day"], [...primerComida], [...segundaComida]];

  const options2 = {
    title: "Alimentos más recomendados",
  };

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
