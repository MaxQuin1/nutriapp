import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Recetas() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState(null);

  const buscarPlatillo = async () => {
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

  const redirectToGoogle = (resultado) => {
    const googleSearchUrl = `https://www.google.com/search?q=${resultado}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="bg-lime-100 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center mb-4">
          <label className="text-2xl font-bold mb-2">Busca el platillo que nescecitas</label>
          <div className="flex items-center">
            <input
              className="p-3 rounded border border-gray-300 focus:outline-none focus:border-green-500 mr-2"
              id="busqueda"
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
              }}
              placeholder="Escribe tu platillo"
            />
            <button
              className="bg-purple-300 p-2 rounded hover:bg-purple-400"
              onClick={buscarPlatillo}
            >
              Buscar
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {resultados.map((resultado, index) => (
            <div
              key={index}
              className="m-2 p-2 bg-white shadow-md rounded-md text-gray-800 cursor-pointer"
              onClick={() => redirectToGoogle(resultado)}
            >
              {resultado}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
