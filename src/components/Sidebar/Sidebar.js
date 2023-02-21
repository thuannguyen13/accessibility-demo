import "./Sidebar.scss";
import Link from "./Link";

export default function Sidebar() {
    return (
        <aside tabIndex="-1" className="sidebar">
            <Link index href="/Home" label="Home" />
            <Link href="/Alt" label="Alt" />
            <Link href="/Role" label="Role" />
            <Link href="/TabOrder" label="Tab Order" />
            <Link href="/KeyboardInput" label="Keyboard Input" />
        </aside>
    );
}
