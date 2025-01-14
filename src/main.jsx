import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./App.css";
import Regesterasi from "./components/Regesterasi";
import PembelianObat from "./components/PembelianObat"; 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Regesterasi",
    element: <Regesterasi />
  },
  {
    path: "/Pembelian-Obat",
    element: <PembelianObat /> // Updated component name here as well
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
