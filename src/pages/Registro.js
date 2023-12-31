import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Registro() {
  const [tipo, setTipo] = useState("Paciente");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confimContrasena, setConfimContrasena] = useState("");
  const [token, setToken] = useState("");

  const Registrar = async () => {
    try {
      if (!tipo || !nombre || !correo || !contrasena || !confimContrasena || !token) {
        alert("Todos los campos deben ser completados");
        return;
      }

      if (contrasena !== confimContrasena) {
        alert("Las contraseñas no coinciden");
        return;
      }

      if (tipo === "Paciente") {
        const respuesta = await axios.get(`http://localhost:8082/token/${encodeURIComponent(token.trim())}`)
        if (respuesta.status === 200 && respuesta.data.status) {
          const response = await axios.post("http://localhost:8082/pacientes", {
            nombre_usuario: nombre,
            correo_electronico: correo,
            contrasena: contrasena,
            tipo_usuario: tipo,
            token: token,
          });
          if (response.data) {
            window.location.href = "/";
            alert("Cuenta creada correctamente");
          } else {
            console.log("Fallo en crear la cuenta");
          }
        } else {
          alert("Error al verificar el token");
        }
      }

      if (tipo === "Doctor") {
        const response = await axios.post("http://localhost:8082/nutriologos", {
          nombre_usuario: nombre,
          correo_electronico: correo,
          contrasena: contrasena,
        });
        console.log(response);
        if (response.data) {
          window.location.href = "/";
          alert("Cuenta creada correctamente");
        } else {
          console.log("Fallo en crear la cuenta");
        }
      }
    } catch (error) {
      alert('Error en agregar al usuario verifique los campos')
      console.error("Error al realizar la solicitud:", error.message);
    }
  }

  return (
    <div className="h-screen bg-cover bg-center" id="mydiv">
      <div className="flex items-center justify-center h-full">
        <div className="max-w-md w-full bg-lime-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Elige tu rol</h2>
          <div className="mb-2">
            <select
              className="w-full p-2 border rounded-lg"
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            >
              <option>Paciente</option>
              <option>Doctor</option>
            </select>
          </div>
          <h2 className="text-xl font-bold text-center mb-2">
            Ingresa tus datos personales
          </h2>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="text"
              placeholder="Email"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => {
                setContrasena(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full p-2 border rounded-lg"
              type="password"
              placeholder="Confirmar contraseña"
              value={confimContrasena}
              onChange={(e) => {
                setConfimContrasena(e.target.value);
              }}
            />
          </div>
          {tipo === "Paciente" && (
            <>
              <h2 className="text-xl font-bold text-center mb-2">
                Token de acceso
              </h2>
              <div className="mb-2">
                <input
                  className="w-full p-2 border rounded-lg"
                  type="text"
                  placeholder="Ingrese su token"
                  value={token}
                  onChange={(e) => {
                    setToken(e.target.value);
                  }}
                />
              </div>
            </>
          )}
          <div className="text-center">
            <button
              className="w-full p-2 bg-amber-200 text-white rounded-lg hover:bg-amber-400"
              onClick={Registrar}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
