import "./Sidebar.scss";
import Link from "./Link";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            {/* <Link href="/Home" pageTitle="Home" /> */}
            <a href={`/Home`}>Home</a>
            <a href={`/Alt`}>Alt</a>
            <a href={`/Role`}>Role</a>
        </aside>
    );
}
