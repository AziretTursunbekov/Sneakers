import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CardProvider } from "./context/CardContext.jsx";
import { RouteProvider } from "./context/RouteContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouteProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </RouteProvider>
    </AuthProvider>
  </React.StrictMode>
);
