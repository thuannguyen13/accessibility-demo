import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Home from "./routes/Home";
import Alt from "./routes/Alt";
import Role from "./routes/Role";
import TabOrder from "./routes/TabOrder";
import KeyboardInput from "./routes/KeyboardInput";
import ReactionTime from "./routes/ReactionTime";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
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
                path: "ReactionTime",
                element: <ReactionTime />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
