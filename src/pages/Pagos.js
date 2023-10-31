import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'

export default function Pagos() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-full background-image absolute top-0 left-0" id="mydiv">
        <h1 style={{ position: 'absolute', top: '70px', left: '50px' }} className="text-4xl mb-4 bg-lime-300 p-2 mt-5 w-[18%] rounded-lg">
          Informacion del pago
        </h1>
        <div className="relative w-full h-screen">
          <div className="flex justify-center items-center h-full">
            <form className="max-w-[400px] mx-auto p-8 px-8 rounded-lg w-full h-[65%] bg-lime-300">
              <h1 className="text-2xl text-center">Forma de pago</h1>
              <div className="flex items-center justify-center p-2">
                <select className="border bg-white w-[80%] text-center p-2">
                  <option>Tarjeta</option>
                  <option>Efectivo</option>
                </select>
              </div>

                <p className="p-2 text-center">Numero de tarjeta</p>
              <div className="flex justify-center items-center">
              <input className="bg-white border w-[80%] p-2"></input>
              </div>

              <p className="p-2 text-center">Vencimiento hasta</p>
              <div className="flex justify-center items-center">
              <input className="bg-white border w-[80%] p-2"></input>
              </div>

              <p className="p-2 text-center">CVC</p>
              <div className="flex justify-center items-center">
              <input className="bg-white border w-[80%] p-2"></input>
              </div>
              
              <div className="flex items-center justify-center p-3">
              <button className="bg-amber-300 text-white p-2 hover:bg-amber-200 rounded-lg">Pagar</button>
              </div>

            </form>
          </div>
        </div>

      </div>

    </>
  )
}
