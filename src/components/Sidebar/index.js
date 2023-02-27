import "./sidebar.scss";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside aria-hidden="true" tabIndex="-1" className="sidebar">
            <NavLink tabIndex="-1" className="link" to="/Home">
                Home
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/Alt">
                Alt
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/Role">
                Role
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/TabOrder">
                Tab Order
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/KeyboardInput">
                Keyboard Input
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/ReactionTime">
                Reaction Time
            </NavLink>
        </aside>
    );
}