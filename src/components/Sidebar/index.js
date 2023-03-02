import "./sidebar.scss";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside aria-hidden="true" tabIndex="-1" className="sidebar">
            <NavLink tabIndex="-1" className="link" to="/Home">
                Home
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/Alt">
                Text Alt
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/Role">
                Element Role
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/TabOrder">
                Tab Order
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/KeyboardInput">
                Alternative Input
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/ReactionTime">
                Reaction Time
            </NavLink>
            <NavLink tabIndex="-1" className="link" to="/MarkupReady">
                Markup Ready
            </NavLink>
        </aside>
    );
}
