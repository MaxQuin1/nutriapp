import React, { useEffect, useState } from "react";

export default function Recetas() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState(null);

  const prueba = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/auto-complete?app_id=e0a35321&app_key=a4662c7dd8633a2ee4c35ee3e7d092bc&q=${busqueda}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      setResultados(data);
      setError(null);
    } catch (error) {
      console.error("Error al obtener detalles nutricionales:", error);
      setResultados([]);
      setError(error.message || "Error desconocido");
    }
  };

  useEffect(() => {
    if (busqueda.trim() !== "") {
      prueba();
    }
  }, [busqueda]);

  useEffect(() => {
    return () => {
      // Limpiar recursos, si es necesario
    };
  }, []);

  return (
    <>
      <label htmlFor="busqueda">Busca algo</label>
      <input
        id="busqueda"
        value={busqueda}
        onChange={(e) => { setBusqueda(e.target.value) }}
        placeholder="Escribe aquí"
      />
      {resultados.map((resultado, index) => (
        <p key={index}>{resultado}</p>
      ))}
    </>
  );
}
