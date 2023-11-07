import React from 'react';
import Navbar from '../components/Navbar';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions, localeEs, Button } from '@mobiscroll/react';


function Cita() {
    const Agregar = () =>{
        alert("Se agrego correctamente") //Para simular que la cita se a agregado correctamente
    }

    return (
        <>
            <Navbar />
            <div className="h-screen relative">
                <div className="w-full h-full background-image absolute top-0 left-0" id="mydiv"></div>
                <div className="text-white relative z-12">
                    <div className="left-4 pl-2">
                        <h1 className="text-4xl mb-4 text-black bg-lime-200 p-2 mt-4 w-[25%] rounded-lg" style={{ position: 'absolute', top: '50px', right: '100px' }}>
                            Tus próximas citas
                        </h1>
                        <div className="table" style={{ position: 'absolute', top: '200px', right: '100px', width: '500px', height: '20px' }}>
                            <h1 className="text-2xl text-indigo-500 font-semibold text-center">Agrega una cita</h1>
                            <Datepicker
                                controls={['calendar', 'time']}
                                touchUi={true}
                            />
                            <button className="bg-purple-600 p-2 rounded-md hover:bg-purple-500" onClick={Agregar}>Confirmar Cita</button>
                        </div>
                        <h1 className="text-4xl font-bold mb-4 text-black p-2 mt-5 w-[19%] rounded-lg items-r" style={{ position: 'absolute', top: '70px', left: '500px' }}>
                            Calendar
                        </h1>
                        <div className="absolute right-[50%] top-[200px] w-[24%] h-[300px]">
                            <Datepicker
                                controls={['calendar', 'time']}
                                display="inline"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cita;
