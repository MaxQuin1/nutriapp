import React from "react";
import {
  BsFillChatDotsFill,
  BsPersonCircle,
  BsFillCalendar2EventFill,
  BsCashCoin,
  BsFillBarChartLineFill,
} from "react-icons/bs";

function Tareas() {
  return (
    <div className="bg-lime-400 text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="">
            <BsPersonCircle size="8rem" />
            <a href="/miperfil">
              <p className="text-center text-2xl">Mi perfil</p>
            </a>
            
          </div>
          <div>
            <BsFillCalendar2EventFill size="8rem" />
            <a href="/Cita">
              <p className="text-center text-2xl">Calendario y citas</p>
            </a>
            
          </div>
          <div>
            <BsFillChatDotsFill size="8rem" />
            <p className="text-center text-2xl">Chat</p>
          </div>
          <div>
            <BsCashCoin size="8rem" />
            <p className="text-center text-2xl">Pagos</p>
          </div>
          <div>
            <BsFillBarChartLineFill size="8rem" />
            <p className="text-center text-2xl">Mi actividad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tareas;
