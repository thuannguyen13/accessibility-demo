import "../styles/style.scss";
import Button from "../components/Button";
import Section from "../components/Section";
import Code from "../components/Code";
import Intro from "../components/Intro";
import Box from "../components/Box";

export default function Role() {
    const code = {
        example1: `<button class="button">Button</button>`,
        example2: `<span class="button">Button</span>`,
        example3: ` <span role="button" class="button">Button</span>`,
    };
    return (
        <>
            <Section>
                <Intro title="HTML Role Attribute" description="The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers." />
            </Section>
            <Section>
                <Box title="Native <button> element">
                    <Button tabIndex="1" />
                    <Code code={code.example1} />
                </Box>
            </Section>
            <Section>
                <Box title="A <span> element">
                    <span tabIndex="1" className="button">
                        Button
                    </span>
                    <Code code={code.example2} />
                </Box>
            </Section>
            <Section>
                <Box title="A <span> element with button role">
                    <span tabIndex="1" role="button" className="button">
                        Button
                    </span>
                    <Code code={code.example3} />
                </Box>
            </Section>
        </>
    );
}
