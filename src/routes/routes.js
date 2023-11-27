import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Home from "../pages/Home";
import MiPerfil from "../pages/MiPerfil";
import Cita from '../pages/Cita'
import Chat from "../pages/Chat";
import Pagos from '../pages/Pagos'
import InfoPaciente from '../pages/InfoPaciente'
import Configuracion from "../pages/Configuracion";
import Pacientes from "../pages/Pacientes"
import Recetas from "../pages/Recetas";


export const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/miperfil",
    element: <MiPerfil />,
  },
  {
    path: "/cita",
    element: <Cita />
  },
  {
    path: "/chat",
    element: <Chat />
  },
  {
    path: "/pagos",
    element: <Pagos />
  },
  {
    path: "/infopaciente",
    element: <InfoPaciente />
  },
  {
    path: "/configuracion",
    element: <Configuracion />
  },
  {
    path: "/Pacientes",
    element: <Pacientes /> 
  },
  {
    path: "/recetas",
    element: <Recetas />,
  },
]);
