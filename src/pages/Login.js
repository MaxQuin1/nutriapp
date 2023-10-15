import React from 'react'
import fondo from '../img/fondo.jpg'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

export default function Login() {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">

      <div className="hidden sm:block ">
        <img className="w-full h-full object-cover" src={fondo}></img>
      </div>

      <div className="flex flex-col justify-center bg-lime-200">

        <form className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg bg-white">
          <h2 className="text-3xl text-center">Inicia de sesion</h2>
          <div className="flex flex-col py-2">
            <input className=" bg-white mt-2 p-2 border border-black" type="text" placeholder="email"></input>
          </div>
          <div className="flex flex-col py-2">
            <input className=" bg-white mt-2 p-2 border border-black" type="Password" placeholder="password"></input>
          </div>
          <div className="flex flex-col py-2">
            <input className=" bg-white mt-2 p-2 border border-black" type="Password" placeholder="password"></input>
          </div>
          <div className="mb-6 text-center">
                <button className="rounded-lg p-3 bg-amber-200">Login</button>
                <p>Eres nuevo?</p>
                <p className=" text-sky-500">Registrate</p>
                <Link to="/Registro">
                 <button className="bg-sky-500 p-3 rounded-lg">Register</button>
                </Link>
               
          </div>
          
        </form>

      </div>

    </div>

  )
}
