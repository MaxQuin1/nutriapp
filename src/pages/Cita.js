import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

function Cita() {
  const [citas, setCitas] = useState([]);
  const [values, setValues] = useState({
    Fecha: "",
    Hora: "",
    Paciente: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8082/citas")
      .then((respuesta) => {
        setCitas(respuesta.data.listacitas);
      })
      .catch((error) => console.log(error));
  }, []);

  const crearCita = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/citas", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const confirmarCita = async (id) => {
    const response = await axios.delete(`http://localhost:8082/citas/${id}`);

    if (response.status === 200) {
      setCitas(citas.filter((cita) => cita.id_cita !== id));
      alert("la cita se confirmo");
    } else {
      alert("Ocurrió un error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen relative">
        <div
          className="w-full h-full background-image absolute top-0 left-0"
          id="mydiv"
        ></div>
        <div className="text-white relative z-12">
          <div className="left-4 pl-2">
            <h1
              className="text-4xl mb-4 text-black bg-lime-100 p-2 mt-4 w-[25%] rounded-lg"
              style={{ position: "absolute", top: "50px", right: "100px" }}
            >
              Tus próximas citas
            </h1>
            <table
              className="table table-striped table-bordered shadow"
              style={{
                position: "absolute",
                top: "230px",
                right: "100px",
                width: "500px",
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
                        onClick={() => confirmarCita(cita.id_cita)}
                        className="btn btn-success"
                      >
                        Confirmar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="absolute right-[25%] top-[150px] h-[20px]">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="bg-purple-400 p-2 text-white rounded-lg hover:bg-purple-500"
              >
                Agregar cita
              </button>
            </div>
            <div className="w-[50%] bg-white text-black p-5 rounded-lg shadow-md">
              <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "today prev,next",
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"50vh"}
                className="mt-4"
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
                    <h1 className="modal-title fs-5 text-black" id="staticBackdropLabel">
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
                        placeholder="dia/mes/año"
                        onChange={(e) =>
                          setValues({ ...values, Fecha: e.target.value })
                        }
                        className="border p-2 rounded-lg w-[80%]"
                      ></input>
                      <p className="p-2 font-semibold text-black">Hora</p>
                      <input
                        placeholder="00:00:00"
                        onChange={(e) =>
                          setValues({ ...values, Hora: e.target.value })
                        }
                        className="border p-2 rounded-lg w-[80%]"
                      ></input>
                      <p className="p-2 font-semibold text-black">Paciente</p>
                      <input
                        placeholder="Paciente"
                        onChange={(e) =>
                          setValues({ ...values, Paciente: e.target.value })
                        }
                        className="border p-2 rounded-lg w-[80%]"
                      ></input>
                      <br></br>
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
    </>
  );
}

export default Cita;
