import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavDash() {
  return (
    <div className="fixed container">
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 sm:w-1/3 md:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-2 py-2 overflow-y-auto bg-lime-100">
          <ul className="space-y-2 font-medium">
            <li className="flex items-center">
              <button className="mt-5 p-2 rounded-full bg-purple-300">Datos de cuenta</button>
            </li>
            <li className="flex items-center">
              <button className="p-2 rounded-full bg-purple-300">Mis estadísticas</button>
            </li>
            <li className="flex items-center">
              <button className="p-2 px-5 rounded-full bg-purple-300">IMC</button>
            </li>
            <Link to='/configuracion'>
            <li className="flex items-center">
              <BsPersonCircle size="3rem" />
              <div className="ml-2">
                <a href="/configuracion" className="w-36 md:w-48 lg:w-60 xl:w-72">Nombre usuario</a>
                <br/>
                <a href="/configuracion" className="w-36 md:w-48 lg:w-60 xl:w-72">Cuenta local</a>
              </div>
            </li>
            </Link>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default NavDash;
