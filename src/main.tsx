import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import HomeScreen from "./home/HomeScreen";
import SIgnIn from "./auth/SIgnIn";
import ContactUs from "./auth/ContactUs";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";
import PopUp from "./model/pop-up/pop-up";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomeScreen /> */}
    {/* <SIgnIn /> */}
    {/* <ContactUs /> */}
    <RouterProvider router={Routes} />
  </React.StrictMode>
);
