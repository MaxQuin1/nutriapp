import React from 'react'
import Navbar from '../components/Navbar'
import NavDashInfo from '../components/NavDashInfo'

export default function InfoPaciente() {
  return (
    <>
    <Navbar></Navbar>
    <NavDashInfo></NavDashInfo>
    <h1  className="text-center text-3xl p-2">IMC</h1>
    <button style={{ position: 'absolute', top: '115px', right: '100px' }} className="bg-lime-500 p-2 rounded-lg hover:bg-lime-400">Editar</button>
    </>
  )
}
