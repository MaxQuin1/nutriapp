import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

function Cita() {
  const tipo_usuario = localStorage.getItem("tipo_usuario");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const [citas, setCitas] = useState([]);
  const [values, setValues] = useState({
    Fecha: "",
    Hora: "",
    Paciente: usuario.nombre,
  });

  const eventos = citas.map((cita) => ({
    title: "Cita",
    start: new Date(cita.Fecha),
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await axios.get("http://localhost:8082/citas");
        const response = respuesta.data.listacitas;
        const citasDisponibles = response.filter((cita) => {
          return cita.status === null;
        });
        setCitas(citasDisponibles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [citas]);

  const crearCita = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8082/citas", values);
      const nuevaCita = res.data.cita;
      setCitas((citasActuales) => [...citasActuales, nuevaCita]);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const confirmarCita = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8082/citas/${id}`);
      if (response.status === 200) {
        alert("La cita se confirmó");
        const citasActualizadas = citas.map((cita) =>
          cita.id_cita === id ? { ...cita, status: "confirmada" } : cita
        );
        setCitas(citasActualizadas);
      } else {
        alert("Ocurrió un error al confirmar la cita");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error inesperado");
    }
  };

  let contenido;
  if (tipo_usuario === "Nutricionista") {
    contenido = (
      <>
        <table
          className="table table-striped table-bordered shadow"
          style={{
            position: "absolute",
            top: "120px",
            right: "70px",
            width: "450px",
          }}
        >
          <thead className="bg-green-500 text-white">
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Paciente</th>
              <th scope="col">Confirmación</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita, index) => (
              <tr key={index}>
                <td>{cita.Fecha}</td>
                <td>{cita.Hora}</td>
                <td>{cita.Paciente}</td>
                <td>
                  <button
                    type="button"
                    className="bg-green-400 p-2 text-white rounded-lg hover:bg-green-500"
                    onClick={() => confirmarCita(cita.id_cita)}
                  >
                    Confirmar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
    contenido = (
      <>
        <table
          className="table table-striped table-bordered shadow"
          style={{
            position: "absolute",
            top: "150px",
            right: "70px",
            width: "450px",
          }}
        >
          <thead className="bg-green-500 text-white">
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Paciente</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita, index) => (
              <tr key={index}>
                <td>{cita.Fecha}</td>
                <td>{cita.Hora}</td>
                <td>{cita.Paciente}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="absolute right-[21%] top-[100px] h-[20px]">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="bg-purple-400 p-2 text-white rounded-lg hover:bg-purple-500"
          >
            Agregar cita
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="h-screen relative ">
        <div
          className="w-full h-full background-image absolute top-0 left-0 "
          id="mydiv"
        >
          <div className="text-white relative">
            <div className="pl-10 pt-5">
              <h1
                className="text-4xl mb-4 text-black bg-lime-100 p-2 mt-4 w-[25%] rounded-lg"
                style={{ position: "absolute", top: "10px", right: "150px" }}
              >
                Tus próximas citas
              </h1>
              {contenido}
              <div className="w-[50%] bg-white text-black p-5 rounded-lg shadow-md">
                <FullCalendar
                  key={JSON.stringify(eventos)}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView={"dayGridMonth"}
                  headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  height={"50vh"}
                  className="mt-4"
                  events={eventos}
                />
              </div>
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        className="modal-title fs-5 text-black"
                        id="staticBackdropLabel"
                      >
                        Agregar Nueva Cita
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <p className="p-2 font-semibold text-black">Fecha</p>
                        <input
                          type="date"
                          placeholder="dia/mes/año"
                          onChange={(e) =>
                            setValues({ ...values, Fecha: e.target.value })
                          }
                          className="border p-2 rounded-lg w-[80%] text-black"
                        ></input>
                        <p className="p-2 font-semibold text-black">Hora</p>
                        <input
                          placeholder="00:00:00"
                          onChange={(e) =>
                            setValues({ ...values, Hora: e.target.value })
                          }
                          className="border p-2 rounded-lg w-[80%] text-black mb-4"
                        ></input>
                        <br />
                        <button
                          onClick={crearCita}
                          type="button"
                          className="bg-green-500 p-2 text-white rounded-lg hover:bg-green-400"
                          data-bs-dismiss="modal"
                        >
                          Agregar
                        </button>
                        <button
                          type="button"
                          className="bg-red-500 p-2 text-white rounded-lg hover:bg-red-400"
                          data-bs-dismiss="modal"
                        >
                          Salir
                        </button>
                      </form>
                    </div>
                    <div class="modal-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cita;
