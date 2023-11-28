import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8082/login", {
      correo_electronico: email,
      contrasena: password,
    });
    if (response.data.status) {
      localStorage.setItem(
        "tipo_usuario",
        response.data.respuesta.tipo_usuario
      );
      localStorage.setItem(
        "usuario",
        JSON.stringify(response.data.respuesta.usuario)
      );
      window.location.href = "/home";
      // navigate("/home");
    } else {
      console.log("Prueba con otro correo o contraseña");
    }
  };

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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-3 border rounded-lg"
                  type="password"
                  placeholder="Contraseña"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="text-center">
                <button
                  className="w-full p-3 bg-amber-200 text-white rounded-lg hover:bg-amber-400"
                  onClick={Login}
                >
                  Iniciar sesión
                </button>
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
