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
        setCounter(0);
        setToast(false);
        setIsCounting(false);
    }

    return (
        <>
            <ToastList>{toast ? <Toast handleClick={remoteToast} /> : ""}</ToastList>
            <Section>
                <Intro
                    title="User have enough time to read and use the content"
                    description="Some people need more time than others to read and use the content. For instance, some people require more time to type text, understand instructions, operate controls, or to otherwise complete tasks on a website."
                />
            </Section>

            <Section>
                <Box title="Provide enough time for screen reader to read content from popup elements">
                    <Button label="Add Toast" onClick={addToast} />
                    <p>
                        Toast timer: <b>{counter}s </b>(disapear after 7s)
                    </p>
                </Box>
            </Section>
        </>
    );
}
