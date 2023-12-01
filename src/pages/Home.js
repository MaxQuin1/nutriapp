import React from "react";
import Navbar from "../components/Navbar";
import Tareas from "../components/Tareas";
import "../App.css";

export default function Home() {
  const persona = JSON.parse(localStorage.getItem("usuario"));

  return (
    <>
      <div id="mydiv">
        <Navbar />
        <div className="h-screen relative">
          <div className="h-full background-image absolute top-0 left-0">
              <div className="relative pl-4">
                <h1 className="text-3xl font-bold text-purple-500 bg-lime-200 p-2 mt-5 rounded-lg">
                  Bienvenido {persona.nombre}
                </h1>
              </div>
              <Tareas />
          </div>
        </div>
      </div>
    </>
  );
}
