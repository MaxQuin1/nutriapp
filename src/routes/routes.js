import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/home",
        element: <Home/>
      },
]);