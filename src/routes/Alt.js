import Section from "../components/Section";
import Box from "../components/Box";
import Intro from "../components/Intro";
import Code from "../components/Code";
import "../styles/style.scss";

export default function Alt() {
    const code = {
        example1: `<img src="image.jpg" alt="space shuttle" />`,
        example2: `<img src="image.jpg" alt=" " />`,
    };
    return (
        <>
            <Section>
                <Intro
                    title="Text alternatives for non-text content"
                    description="Alternative text is a textual substitute for non-text content in web pages. But its principles also apply to multimedia and other non-text content."
                />
            </Section>
            <Section>
                <Box title="Image with alternative text">
                    <img tabIndex="1" src="https://i.ytimg.com/vi/WVKOxdgZxT0/maxresdefault.jpg" alt="space shuttle" />
                    <Code code={code.example1} />
                </Box>
                <Box title="Image without alternative text">
                    <img tabIndex="1" src="https://i.ytimg.com/vi/WVKOxdgZxT0/maxresdefault.jpg" alt="" />
                    <Code code={code.example2} />
                </Box>
            </Section>
        </>
    );
}
