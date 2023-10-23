/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsFillChatDotsFill, BsPersonCircle } from "react-icons/bs";
import { GrConfigure } from "react-icons/gr";
import "../App.css";

import "boxicons";

export default function Navbar() {
  return (
    <>
      <div className="bg-lime-200 w-screen h-[80px] z-10 drop-shadlow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <ul>
              <li>
                <Link to="../img/logo.png">
                  <div className="w-4 h-full"></div>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="hidden md:flex pr-4 font-bold">
            <li>
              <a href="/home">Home</a>
            </li>

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
