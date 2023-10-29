import React from "react";
import logo from "../img/logo.png";
import { Link, Outlet } from "react-router-dom";
import { BsFillChatDotsFill, BsPersonCircle } from "react-icons/bs";
import { GrConfigure } from "react-icons/gr";
import "../App.css";

export default function Navbar() {
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
              <a href="/cita">Mis citas</a>
            </li>
            <li>
              <a href="/pacientes">Mis pacientes</a>
            </li>
            <Link to="/chat">
            <li>
              <BsFillChatDotsFill size="2rem" />
            </li>
            </Link>
            <Link to="/configuracion">
            <li>
              <GrConfigure size="2rem" />
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

