/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsFillChatDotsFill, BsPersonCircle } from "react-icons/bs";
import { GrConfigure } from "react-icons/gr";
import "../App.css";

import "boxicons";

export default function Navbar() {
  //Se sube un cambio en forma de comentario Andrea
  return (
    <>
      <div className="bg-[#ACDA7F] dark:bg-[#ACDA7F] dark:text-white  text-black fixed mb-0 top-0 left-0 w-full flex flex-row justify-between px-20 py-8 items-center">
        <div>
          <Link to={"/home"}>
            <img src={"../img/logo.png"} className="h-4 w-4"/>
          </Link>
        </div>

            <li>
              <a href="">Mis citas</a>
            </li>
            <li>
              <a href="">Mis pacientes</a>
            </li>
            <li>
              <BsFillChatDotsFill size="2rem" />
            </li>
            <li>
              <GrConfigure size="2rem" />
            </li>
            <li>
              <BsPersonCircle size="2rem" />
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
}
