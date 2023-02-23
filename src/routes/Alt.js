import Caption from "../components/Caption/Caption";
import Section from "../components/Section/Section";
import Box from "../components/Box/Box";
import Intro from "../components/Intro/Intro";
import Code from "../components/Code/Code";
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
                    description="Text alternatives help users understand the purpose of an image or function. For example, a text alternative for a search button should be 'Search' instead of 'Magnifying lens'"
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
