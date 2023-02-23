import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }) {
    return (
        <>
            <div className="layout">
                <Sidebar />
                <main tabIndex="1" className="main">
                    <div className="container">{children}</div>
                </main>
            </div>
        </>
    );
}
