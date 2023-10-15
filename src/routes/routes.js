import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registro from '../pages/Registro'

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
      },
      {
        path: "/Navbar",
        element: <Navbar/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/Registro",
        element: <Registro />
      }
]);