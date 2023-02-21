import React, { useState } from "react";
import { useRef } from "react";
import nextId from "react-id-generator";
import "./TextBox.scss";

export default function TextBox({ label, value }) {
    const useFocus = () => {
        const htmlElRef = useRef(null);
        const setFocus = () => {
            htmlElRef.current && htmlElRef.current.focus();
        };

        return [htmlElRef, setFocus];
    };

    const htmlId = nextId();
    const [focus, setFocus] = useState(false);
    const [inputValue, setInputValue] = useState(false);
    const [refElement, setRefElementFocus] = useFocus();

    function handleClick() {
        setFocus(!focus);
        setInputValue(focus == false);
    }

    function handleOnBlur(event) {
        setFocus(focus == false);
        if (event.target.value.length !== 0) {
            setInputValue(inputValue == true);
        } else {
            setInputValue(inputValue == false);
        }
    }

    return (
        <div
            onFocus={(setRefElementFocus, handleClick)}
            onBlur={handleOnBlur}
            className={`text-box ${inputValue ? "has-value" : ""} ${
                focus ? "focus" : ""
            } 
            }`}
        >
            <label
                onFocus={setRefElementFocus}
                className="text-box-label"
                htmlFor={htmlId}
            >
                {label ? label : "Label"}
            </label>
            <input className="text-box-input" id={htmlId} ref={refElement} />
        </div>
    );
}
