import React from 'react'
import Navbar from '../components/Navbar'
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cita() {
    return (
        <>
            <Navbar></Navbar>
            <div className="h-screen relative">
                <div className="w-full h-full background-image absolute top-0 left-0" id="mydiv"></div>
                <div className=" text-white relative z-12 ">
                    <div className="left-4 pl-4">
                        <h1 style={{ position: 'absolute', top: '50px', right: '100px' }} className="text-4xl mb-4 text-purple-800 bg-lime-300 p-2 mt-5 w-[19%] rounded-lg items-r">Tus proximas citas</h1>
                        <table
                            style={{ position: 'absolute', top: '200px', right: '100px', width: '500px', height: '20px', }} className="table">
                            <thead>
                                <tr>
                                    <th className='text-black' scope="col">Fecha</th>
                                    <th className='text-black' scope="col">Hora</th>
                                    <th className='text-black' scope="col">Paciente</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-black'>30 de febrero</td>
                                    <td className='text-black'>25:00</td>
                                    <td className='text-black'>Andrea</td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 style={{ position: 'absolute', top: '70px', left: '500px'}} className="text-4xl font-bold mb-4 text-black p-2 mt-5 w-[19%] rounded-lg items-r">Abril</h1>
                        <table class="table" style={{ position: 'absolute',left: '90px', top: '200px', width: '50%', height: '300px', }}>
                            <thead class="thead-dark" >
                                <tr>

                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>

                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>

                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>

                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>

                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>

                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>

                </div>
            </div>




        </>
    )
}

export default Cita