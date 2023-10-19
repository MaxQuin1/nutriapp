import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registro from '../pages/Registro'

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/registro",
        element: <Registro />
      }
]);