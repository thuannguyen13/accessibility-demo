import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import Root from "./routes/root";
import Alt from "./routes/Alt";
import Home from "./routes/Home";
import Role from "./routes/Role";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "Home",
                element: <Home />,
            },
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
