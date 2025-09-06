//import from react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import css
import "./index.css";
import App from "./App.jsx";
// Toast notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Auth
import { AuthProvider } from "./auth/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer theme="dark" />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
