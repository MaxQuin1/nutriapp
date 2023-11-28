import React from "react";
import logo from "../img/logo.png";
import { Link, Outlet } from "react-router-dom";
import { BsFillChatDotsFill, BsPersonCircle } from "react-icons/bs";
import "../App.css";

export default function Navbar() {
  const tipo_usuario = localStorage.getItem("tipo_usuario");
  let contenido;

  if (tipo_usuario !== "Paciente") {
    contenido = (
      <li>
        <a href="/Pacientes">Mis pacientes</a>
      </li>
    );
  }

  return (
    <>
      <div className="bg-lime-300 w-screen md:h-16 h-20 z-10 shadow-lg sticky top-0">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <ul>
              <li>
                <Link to="/home">
                  <img src={logo} alt="Logo" className="w-12 h-12 mx-auto" />
                </Link>
              </li>
            </ul>
          </div>
          <ul className="hidden md:flex pr-4 font-bold space-x-4">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/cita">Citas</a>
            </li>
            {contenido}
            <Link to="/chat">
              <li>
                <BsFillChatDotsFill size="2rem" />
              </li>
            </Link>
            <Link to="/recetas">
              <li>
                <box-icon type="solid" name="food-menu" size="2rem"></box-icon>
              </li>
            </Link>
            <Link to="/miperfil">
              <li>
                <BsPersonCircle size="2rem" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
