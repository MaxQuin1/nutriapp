import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [usuarios, setUsuarios] = useState([]);
  const tipo = localStorage.getItem("tipo_usuario");

  useEffect(() => {
    if (tipo === "Nutricionista") {
      obtenerNutriologos();
    } else if (tipo === "Paciente") {
      obtenerPacientes();
    }
  }, [tipo]);

  const obtenerNutriologos = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8082/pacientes");
      setUsuarios(respuesta.data.listapacientes);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerPacientes = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8082/nutriologos");
      setUsuarios(respuesta.data.listanutriologos);
    } catch (error) {
      console.log(error);
    }
  };

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
  };

  return (
    <>
      <div className="fixed container">
        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed top-0 left-0 z-40 w-64 sm:w-1/3 md:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-2 py-2 overflow-y-auto bg-lime-100">
            <ul className="font-medium">
              {usuarios.map((usuario) => (
                <li key={usuario.id} className="flex items-center">
                  <button className="mt-5 p-2 rounded-full bg-purple-300 hover:bg-purple-400">
                    {tipo === "Nutricionista"
                      ? usuario.nombre_paciente
                      : tipo === "Paciente"
                      ? usuario.nombre_nutriologo
                      : ""}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <div className="ml-[30%] mt-8 p-4 border rounded-md shadow-md max-w-[50rem]">
        <div className="mb-4 h-[20rem] overflow-y-auto border-b">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span className="bg-blue-500 text-white p-2 rounded-md inline-block">
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded-md mr-2"
            placeholder="Type your message..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
