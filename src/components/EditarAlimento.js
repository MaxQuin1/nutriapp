import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditarAlimento({ id, nombre, dias, isOpen, onClose, onConfirm }) {
  const [alimento, setAlimento] = useState(nombre);
  const [cantidadDias, setCantidadDias] = useState(dias);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setAlimento(nombre);
    setCantidadDias(dias);
  }, [id, nombre, dias]);

  const actualizarAlimento = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!alimento || !cantidadDias ) {
        alert("Todos los campos deben ser completados");
        return;
      }

      await axios.put(`http://localhost:8082/comidas/${id}`, {
        nombre_alimento: alimento,
        cantidad_dias: cantidadDias,
      });

      alert("Alimento actualizado con éxito");
      onConfirm("Datos actualizados con éxito");
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error al actualizar el alimento");
    } finally {
      setLoading(false);
    }
  };

  const buttonColor = "#ae8efb";

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 shadow-2xl flex items-center justify-center z-50 rounded-xl">
          <div className="modal-overlay " onClick={onClose} />
          <div className="modal-container bg-white w-[50%] items-center mx-auto rounded-lg shadow-xl z-50 ">
            <div className="modal-content p-4 bg-lime-400">
              <p className="text-lg font-bold">Alimentos</p>
            </div>
            <div className="flex">
              <div className="flex-1 m-2">
                <input
                  className="w-full border rounded-lg p-2"
                  type="text"
                  value={alimento}
                  onChange={(e) => setAlimento(e.target.value)}
                />
              </div>
              <div className="flex-1 m-2">
                <input
                  className="w-full border rounded-lg p-2"
                  type="number"
                  value={cantidadDias}
                  onChange={(e) => setCantidadDias(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-actions p-4 bg-gray-100">
              <button
                className="btn-primary mr-2 rounded-md p-2 "
                style={{ backgroundColor: buttonColor, color: "black" }}
                onClick={actualizarAlimento}
                disabled={loading}
              >
                {loading ? "Actualizando..." : "Confirmar"}
              </button>
              <button
                className="btn-secondary rounded-md p-2"
                style={{ backgroundColor: buttonColor, color: "black" }}
                onClick={onClose}
                disabled={loading}
              >
                Cancelar
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      )}
    </>
  );
}
