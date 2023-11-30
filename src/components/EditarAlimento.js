import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditarAlimento({ id, isOpen, onClose, onConfirm }) {
  const [alimento, setAlimento] = useState("");
  const [dias, setDias] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  }, [id]);

  const actualizarAlimento = async () => {
    setLoading(true);
    setError(null);

    try {
      await axios.put(`http://localhost:8082/comidas/${id}`, {
        nombre_alimento: alimento,
        cantidad_dias: dias,
      });

      alert("Alimento actualizado con éxito");
      onConfirm();
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
                  placeholder="Alimento"
                  type="text"
                  value={alimento}
                  onChange={(e) => setAlimento(e.target.value)}
                />
              </div>
              <div className="flex-1 m-2">
                <input
                  className="w-full border rounded-lg p-2"
                  placeholder="Dias"
                  type="number"
                  value={dias}
                  onChange={(e) => setDias(e.target.value)}
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
