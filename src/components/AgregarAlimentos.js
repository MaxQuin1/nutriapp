import React, { useEffect, useState } from 'react'
import axios from 'axios';
function AgregarAlimentos({ isOpen, onClose, onConfirm, comida}) {
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
            <div className="modal-actions p-4 bg-gray-100">
              <button
                className="btn-primary mr-2 rounded-md p-2 "
                style={{ backgroundColor: buttonColor, color: 'black' }}
                onClick={onConfirm}
              >
                Confirmar
              </button>
              <button
                className="btn-secondary rounded-md p-2"
                style={{ backgroundColor: buttonColor, color: 'black' }}
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AgregarAlimentos;
