import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TicketsContextProvider } from "./context/ticketsContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TicketsContextProvider>
        <App />
      </TicketsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
