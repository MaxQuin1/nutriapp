import React from "react";
import Navbar from "../components/Navbar";
import Tareas from "../components/Tareas";
import "../App.css";

export default function Home() {

  return (
    <>
    <div id="mydiv">
    <Navbar/>
      <div className="h-screen relative ">
        <div className="w-full h-full background-image absolute top-0 left-0"></div>
        <div className=" text-white relative z-12 ">
          <div className="left-4 pl-4">
          <h1 style={{ position: 'absolute', top: '5px', left: '50px' }} className="text-5xl font-bold mb-4 text-purple-700	 bg-lime-300 p-2 mt-5 w-[22%] rounded-lg  ">
            Bienvenido
          </h1>
          </div>
          <Tareas/>
        </div>
      </div>
      </div>
    </>
  );
}
