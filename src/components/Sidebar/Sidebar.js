import "./Sidebar.scss";
import Link from "./Link";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <Link href="/Alt" label="Alt" />
            <Link href="/Role" label="Role" />
        </aside>
    );
}
