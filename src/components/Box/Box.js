import React from "react";
import "./Box.scss";

export default function Box({ title = "Title", desc = "Description", children }) {
    return (
        <div className="box">
            <h4 className="box-title">{title}</h4>
            {children}
        </div>
    );
}
