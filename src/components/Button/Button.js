import React from "react";
import "./Button.scss";

export default function Button({ label, ariaLabel }) {
    return (
        <button tabIndex="1" aria-label={ariaLabel} className="button">
            {label ? label : "Button"}
        </button>
    );
}
