// import React from "react";
// import { Link } from "react-router-dom";
// import "../App.css";
// function Registro() {
//   return (
//     <>
//       <div className="h-full w-full" id="mydiv">
//         <div className="relative w-full h-screen">
//           <div className="flex justify-center items-center h-full">
//             <form className="max-w-[400px] mx-auto bg-lime-300 p-8 px-8 rounded-lg w-full h-[90%]">
//               <h2 className="text-3xl text-center">Elige tu rol</h2>
//               <div className="flex flex-col py-2">
//                 <select className="bg-white mt-2 p-2 border">
//                   <option>Paciente</option>
//                   <option>Doctor</option>
//                 </select>
//               </div>
//               <h2 className="text-1xl text-center">
//                 Ingresa tus datos personales
//               </h2>
//               <div className="flex flex-col py-2">
//                 <input
//                   className=" bg-white mt-2 p-2 border"
//                   type="Text"
//                   placeholder="Nombre"
//                 ></input>
//               </div>
//               <div className="flex flex-col py-2">
//                 <input
//                   className=" bg-white mt-2 p-2 border"
//                   type="Text"
//                   placeholder="Email"
//                 ></input>
//               </div>
//               <div className="flex flex-col py-2">
//                 <input
//                   className=" bg-white mt-2 p-2 border"
//                   type="Password"
//                   placeholder="Contraseña"
//                 ></input>
//               </div>
//               <div className="flex flex-col py-2">
//                 <input
//                   className=" bg-white mt-2 p-2 border"
//                   type="Password"
//                   placeholder="Confirmar contraseña"
//                 ></input>
//               </div>
//               <h2 className="text-1xl text-center">
//                 Token de acceso (opcional)
//               </h2>
//               <div className="flex flex-col py-2">
//                 <input
//                   className=" bg-white mt-2 p-2 border"
//                   type="Password"
//                   placeholder="Ingrese su token"
//                 ></input>
//               </div>
//               <div className="mb-6 text-center">
//                 <Link to="/home">
//                   <button className="rounded-lg p-3 bg-amber-200" href="">
//                     Register
//                   </button>
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Registro;

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Registro() {
  return (
    <div className="h-screen bg-cover bg-center" id='mydiv'>
      <div className="flex items-center justify-center h-full">
        <div className="max-w-md w-full bg-lime-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Elige tu rol</h2>
          <div className="mb-2">
            <select className="w-full p-2 border rounded-lg">
              <option>Paciente</option>
              <option>Doctor</option>
            </select>
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Ingresa tus datos personales</h2>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Token de acceso (opcional)</h2>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="password"
              placeholder="Ingrese su token"
            />
          </div>
          <div className="text-center">
            <Link to="/home">
              <button className="w-full p-2 bg-amber-200 text-white rounded-lg hover:bg-amber-400">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
