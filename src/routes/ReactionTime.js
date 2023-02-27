import Intro from "../components/Intro";
import Section from "../components/Section";
import Box from "../components/Box";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import ToastList, { Toast } from "../components/Toast";

export default function ReactionTime() {
    const [toast, setToast] = useState(false);
    const [counter, setCounter] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        if (isCounting) {
            const toastInteval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);

            return () => clearInterval(toastInteval);
        }
    }, [isCounting]);

    if (counter === 7) {
        setCounter(0);
        setIsCounting(false);
        setToast(false);
    }

    function addToast() {
        setToast(true);
        setIsCounting(true);
    }

    function remoteToast() {
        setToast(false);
        setIsCounting(false);
    }

    return (
        <>
            <ToastList>{toast ? <Toast handleClick={remoteToast} /> : ""}</ToastList>
            <Section>
                <Intro title="Structure Order" description="Author: Thuan Nguyen" />
            </Section>

            <Section>
                <Box>
                    <Button label="Add Toast" onClick={addToast} />
                    <p>Toast timer: {counter}s</p>
                </Box>
            </Section>
        </>
    );
}
