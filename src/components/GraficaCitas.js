import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

function calcularMes(cita) {
  const fecha = new Date(cita.Fecha);
  const mes = fecha.getMonth();
  return {
    mes: mes
  };
}

export default function GraficaCitas() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/citas")
      .then((respuesta) => {
        setCitas(respuesta.data.listacitas);
      })
      .catch((error) => console.log(error));
  }, []);

  // Mapear citas y agregar la propiedad mes
  const citasConMes = citas.map(cita => {
    const resultado = calcularMes(cita);
    return {
      ...cita,
      mes: resultado.mes
    };
  });

  // Inicializar arrays
  const citasNoviembre = [];
  const citasDiciembre = [];

  // Filtrar citas para noviembre y diciembre
  const citasAsignadas = citasConMes.map((cita) => {
    if (cita.mes === 10) {
      citasNoviembre.push(cita);
    } else if (cita.mes === 11) {
      citasDiciembre.push(cita);
    }
    return cita;
  });

  // Filtrar citas confirmadas y no confirmadas para noviembre y diciembre
  const citasConfirmadasNoviembre = citasNoviembre.filter((cita) => cita.status === 1);
  const citasConfirmadasDiciembre = citasDiciembre.filter((cita) => cita.status === 1);
  const citasNoConfirmadasNoviembre = citasNoviembre.filter((cita) => cita.status === null);
  const citasNoConfirmadasDiciembre = citasDiciembre.filter((cita) => cita.status === null);

  // Datos para el gráfico
  const data = [
    ["Meses", "Asistidas", "Faltas"],
    ["Noviembre", citasConfirmadasNoviembre.length, citasNoConfirmadasNoviembre.length],
    ["Diciembre", citasConfirmadasDiciembre.length, citasNoConfirmadasDiciembre.length],
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
