import React from "react";
import Navbar from "../components/Navbar";
import Tareas from "../components/Tareas";
import "../App.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="h-screen relative">
        <div className="w-full h-full background-image absolute top-0 left-0"></div>
        <div className=" text-white relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white bg-lime-300 p-2 mt-5 w-[13%] rounded-lg">
            ¡Bienvenido!
          </h1>
          <Tareas></Tareas>
        </div>
      </div>
    </>
  );
}
