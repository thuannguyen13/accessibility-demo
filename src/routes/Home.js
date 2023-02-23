import Intro from "../components/Intro/Intro";
import Section from "../components/Section/Section";

export default function Home() {
    return (
        <>
            <Section>
                <Intro title="Accessibility Demo" description="Author: Thuan Nguyen" />
            </Section>
            <Section>
                <p className="body no-margin">
                    Use screen readers of your preference and choose a demo you want to test. For the sake of simplicity, only the content of the demo is affected by the screen reader.
                </p>
            </Section>
        </>
    );
}
