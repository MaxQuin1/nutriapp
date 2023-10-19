import React from "react";
import fondo from "../img/fondo.jpg";
import { Link } from "react-router-dom";
import "../App.css";
function Registro() {
  return (
    <div className="relative w-full h-screen">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-lime-300 p-8 px-8 rounded-lg">
          <h2 className="text-3xl text-center">Que eres</h2>
          <div className="flex flex-col py-2">
            <select className="bg-white mt-2 p-2 border">
              <option>Paciente</option>
              <option>Doctor</option>
            </select>
          </div>
          <h2 className="text-1xl text-center">Ingresa tus datos personales</h2>
          <div className="flex flex-col py-2">
            <input
              className=" bg-white mt-2 p-2 border"
              type="Text"
              placeholder="Nombre"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <input
              className=" bg-white mt-2 p-2 border"
              type="Text"
              placeholder="Email"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <input
              className=" bg-white mt-2 p-2 border"
              type="Password"
              placeholder="Contraseña"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <input
              className=" bg-white mt-2 p-2 border"
              type="Password"
              placeholder="Confirmar contraseña"
            ></input>
          </div>
          <h2 className="text-1xl text-center">Token de acceso (opcional)</h2>
          <div className="flex flex-col py-2">
            <input
              className=" bg-white mt-2 p-2 border"
              type="Password"
              placeholder="Ingrese su token"
            ></input>
          </div>
          <div className="mb-6 text-center">
            <Link to="/home">
              <button className="rounded-lg p-3 bg-amber-200" href="">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
