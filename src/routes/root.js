import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

import "../styles/style.scss";
export default function Root() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}
