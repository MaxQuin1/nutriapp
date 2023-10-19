/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, Outlet } from "react-router-dom";
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

        <div className="flex flex-row">
          <div className="flex flex-row items-center px-4 gap-3 justify-center text-clip text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            <li>
            <box-icon name='home-alt-2' ></box-icon>
            </li>
            <li>
            <box-icon type='solid' name='calendar'></box-icon>
            </li>
            <li>
            <box-icon type='solid' name='message-square-dots'></box-icon>
            </li>
            <li className="">
              <box-icon type="solid" name="cog"></box-icon>
            </li>
            <li className="">
              <Link to={"/miperfil"}>
                <box-icon name="user-circle" type="solid"></box-icon>
              </Link>
            </li>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
