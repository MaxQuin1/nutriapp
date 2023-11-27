import React from "react";
import {
  BsFillChatDotsFill,
  BsPersonCircle,
  BsFillCalendar2EventFill,
  BsCashCoin,
  BsFillBarChartLineFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Tareas() {
  return (
    <>
    <div className="bg-lime-100 fixed bottom-0 w-full">
      <div className="m-3 bg-lime-500 text-white p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <Link to='/miperfil'>
            <div className="text-center flex flex-col items-center">
              <BsPersonCircle size="4rem" />
              <a href="/miperfil">
                <p className="text-2xl">Mi perfil</p>
              </a>
            </div>
            </Link>
            <Link to='/cita'>
            <div className="text-center flex flex-col items-center">
              <BsFillCalendar2EventFill size="4rem" />
              <a href="/Cita">
                <p className="text-2xl">Calendario y citas</p>
              </a>
            </div>
            </Link>
            {/* <Link to='/chat'>
            <div className="text-center flex flex-col items-center">
              <BsFillChatDotsFill size="4rem" />
              <p className="text-2xl">Chat</p>
            </div>
            </Link> */}
            <Link to='/pagos'>
            <div className="text-center flex flex-col items-center">
              <BsCashCoin size="4rem" />
              <p className="text-2xl">Pagos</p>
            </div>
            </Link>
            <Link to='/infoPaciente'>
            <div className="text-center flex flex-col items-center">
              <BsFillBarChartLineFill size="4rem" />
              <p className="text-2xl">Mi actividad</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Tareas;
