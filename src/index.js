import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import Root from "./routes/Root";
import Alt from "./routes/Alt";
import Role from "./routes/Role";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "Alt",
                element: <Alt />,
            },
            {
                path: "Role",
                element: <Role />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
