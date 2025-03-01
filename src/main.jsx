import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer, Zoom } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import "./main.scss";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ToastContainer
                position="bottom-center"
                autoClose={2500}
                limit={1}
                pauseOnHover
                theme="dark"
                transition={Zoom}
            />
            <App />
        </BrowserRouter>
    </StrictMode>
);
