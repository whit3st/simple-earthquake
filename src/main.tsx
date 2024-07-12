import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { EarthquakeDataContextProvider } from "./context/eartquake-data-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <EarthquakeDataContextProvider>
            <App />
        </EarthquakeDataContextProvider>
    </React.StrictMode>
);
