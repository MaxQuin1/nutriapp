import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import Navbar from '../components/Navbar';

function Pacientes() {
  return (
    <>
    <div className="h-screen bg-cover bg-center relative" id="mydiv">
      <Navbar />
        <div className="m-5 w-[15%] bg-white border p-2 rounded">
          <input className="" placeholder="Buscar" />
        </div>
        <div className="mt-20 h-[60vh] flex flex-col items-center p-2 bg-lime-100 overflow-y-auto">
          <div className="bg-purple-500 p-2 w-4/5 rounded-lg m-2">
            <BsPersonCircle size="4rem" />
          </div>
          <div className="bg-purple-500 p-2 w-4/5 rounded-lg m-2">
            <BsPersonCircle size="4rem" />
          </div>
          <div className="bg-purple-500 p-2 w-4/5 rounded-lg m-2">
            <BsPersonCircle size="4rem" />
          </div>
          <div className="bg-purple-500 p-2 w-4/5 rounded-lg m-2">
            <BsPersonCircle size="4rem" />
          </div>
          <div className="bg-purple-500 p-2 w-4/5 rounded-lg m-2">
            <BsPersonCircle size="4rem" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pacientes;
