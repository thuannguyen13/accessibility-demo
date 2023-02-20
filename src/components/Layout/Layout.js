import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }) {
    return (
        <>
            <div className="container">
                <Sidebar />
                <main className="main">{children}</main>
            </div>
        </>
    );
}
