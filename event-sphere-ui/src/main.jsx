import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthContextProvider from "../context/AuthContextProvider.jsx";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API;
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <ToastContainer />
    </AuthContextProvider>
  </React.StrictMode>
);
