import React from "react";
import "./section.scss";

export default function Section({ vertical = false, children }) {
    return <section className={`section ${vertical ? "vertical" : ""}`}>{children}</section>;
}
