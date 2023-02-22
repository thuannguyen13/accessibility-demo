import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import Root from "./routes/root";
import Home from "./routes/Home";
import Alt from "./routes/Alt";
import Role from "./routes/Role";
import TabOrder from "./routes/TabOrder";
import KeyboardInput from "./routes/KeyboardInput";
import StructureOrder from "./routes/StructureOrder";

const router = createBrowserRouter(
    [
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
                {
                    path: "TabOrder",
                    element: <TabOrder />,
                },
                {
                    path: "KeyboardInput",
                    element: <KeyboardInput />,
                },
                {
                    path: "StructureOrder",
                    element: <StructureOrder />,
                },
            ],
        },
    ],
    {
        basename: "/",
    }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
