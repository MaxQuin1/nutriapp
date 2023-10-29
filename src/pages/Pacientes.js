import React from 'react'
import {
    BsPersonCircle,
} from "react-icons/bs";
import Navbar from "../components/Navbar";


function Pacientes() {
    return (
        <>
        <Navbar></Navbar>
        <div className="h-screen bg-cover bg-center" id='mydiv'>
            <input style={{ position: 'absolute', top: '20%', left: '50px' }} className="bg-white border w-[13%] p-2" placeholder="Buscar"></input>
            <div style={{ position: 'absolute', top: '30%' }} className="bg-lime-100 fixed bottom-0 w-full">
                <div  style={{ position: 'absolute', top: '10%', left: '50px' }} className="bg-purple-500 p-2 w-[93%] rounded-lg">
                <BsPersonCircle size="4rem" />
                </div>
                <div  style={{ position: 'absolute', top: '30%', left: '50px' }} className="bg-purple-500 p-2 w-[93%] rounded-lg">
                <BsPersonCircle size="4rem" />
                </div>
                <div  style={{ position: 'absolute', top: '50%', left: '50px' }} className="bg-purple-500 p-2 w-[93%] rounded-lg">
                <BsPersonCircle size="4rem" />
                </div>
                <div  style={{ position: 'absolute', top: '70%', left: '50px' }} className="bg-purple-500 p-2 w-[93%] rounded-lg">
                <BsPersonCircle size="4rem" />
                </div>
            </div>
        </div>

        </>
    )
}

export default Pacientes