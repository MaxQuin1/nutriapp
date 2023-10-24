import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registro from "../pages/Registro";
import MiPerfil from "../pages/MiPerfil";
import Cita from '../pages/Cita'

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
    path: "/miperfil",
    element: <MiPerfil />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Cita",
    element: <Cita />
  }
]);
