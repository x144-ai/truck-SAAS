import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ensures React is using the correct rendering method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
