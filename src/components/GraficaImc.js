import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export default function GraficaImc() {
  // const persona = JSON.parse(localStorage.getItem("usuario"));
  const tipo = localStorage.getItem('tipo_usuario')
  // const [eleccionLocal, setEleccionLocal] = useState("");

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
    </div>
  );
}
