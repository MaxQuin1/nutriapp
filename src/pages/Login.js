// import React from "react";
// import fondo from "../img/fondo.jpg";
// import logo from "../img/logo.png";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <>
//     <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
//       <div className="hidden sm:block ">
//         <img className="w-full h-full object-cover" alt="fondo" src={fondo}></img>
//       </div>
//       <div className="flex flex-col justify-center bg-lime-400">
//         <form className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg bg-white">
//           <h2 className="text-3xl text-center font-bold">Inicio de sesion</h2>
//           <div className="flex flex-col py-2">
//             <input
//               className=" bg-white mt-2 p-2 border border-black rounded-lg"
//               type="text"
//               placeholder="email"
//             ></input>
//           </div>
//           <div className="flex flex-col py-2">
//             <input
//               className=" bg-white mt-2 p-2 border border-black rounded-lg"
//               type="Password"
//               placeholder="password"
//             ></input>
//           </div>
//           <div className="flex flex-col py-2">
//             <input
//               className=" bg-white mt-2 p-2 border border-black rounded-lg"
//               type="Password"
//               placeholder="password"
//             ></input>
//           </div>
//           <div className="mb-6 text-center">
//             <Link to="/home">
//               <button className="rounded-lg p-3 bg-amber-200">Login</button>
//             </Link>
//             <p>Eres nuevo?</p>
//             <p className=" text-sky-500">Registrate</p>
//             <Link to="/Registro">
//               <button className="bg-sky-500 p-3 rounded-lg">Register</button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Login() {
  return (
    <div id="mydiv">
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="flex flex-col justify-center bg-lime-400">
        <div className="max-w-md mx-auto p-6 rounded-lg bg-white shadow-lg">
          <div className="text-center">
            <img src={logo} alt="Logo" className="w-16 h-16 mx-auto" />
            <h2 className="text-3xl font-bold mt-4">Inicio de sesión</h2>
          </div>
          <form className="mt-6">
            <div className="mb-4">
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 border rounded-lg"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="text-center">
              <Link to="/home">
                <button className="w-full p-3 bg-amber-200 text-white rounded-lg hover:bg-amber-400">
                  Iniciar sesión
                </button>
              </Link>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p>¿Eres nuevo?</p>
            <Link to="/Registro" className="text-sky-500 hover:underline">
              <p>Regístrate</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
