import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registro from "../pages/Registro";
import MiPerfil from "../pages/MiPerfil";

export const rutas = createBrowserRouter([
  
      {
        path: "/",
        element: <Home/>
      },
      {
        path: '/miperfil',
        element: <MiPerfil/>
      },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
]);
