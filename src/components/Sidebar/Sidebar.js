import "./Sidebar.scss";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside tabIndex="-1" className="sidebar">
            <NavLink className="link" to="/Home">
                Home
            </NavLink>
            <NavLink className="link" to="/Alt">
                Alt
            </NavLink>
            <NavLink className="link" to="/Role">
                Role
            </NavLink>
            <NavLink className="link" to="/TabOrder">
                Tab Order
            </NavLink>
            <NavLink className="link" to="/KeyboardInput">
                Keyboard Input
            </NavLink>
        </aside>
    );
}
