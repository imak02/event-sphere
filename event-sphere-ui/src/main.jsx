import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
