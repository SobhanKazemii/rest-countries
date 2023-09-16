import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import StateProvider from "./store/StateProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <StateProvider>
            <RouterProvider router={router} />
        </StateProvider>
    </React.StrictMode>
);
