import React from "react";
import "./button.scss";

export default function Button({ label, ariaLabel, tabIndex, onClick }) {
    return (
        <button onClick={onClick} tabIndex={tabIndex ? tabIndex : "0"} aria-label={ariaLabel} className="button">
            {label ? label : "Button"}
        </button>
    );
}
