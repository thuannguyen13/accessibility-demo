import Caption from "../components/Caption/Caption";
import Section from "../components/Section/Section";
import Box from "../components/Box/Box";
import Intro from "../components/Intro/Intro";
import "../styles/style.scss";

export default function Alt() {
    return (
        <>
            <Section>
                <Intro
                    title="Text alternatives for non-text content"
                    description="Text alternatives help users understand the purpose of an image or function. For example, a text alternative for a search button should be 'Search' instead of 'Magnifying lens'"
                />
            </Section>
            <Section>
                <Box>
                    <img
                        tabIndex="1"
                        src="https://i.ytimg.com/vi/WVKOxdgZxT0/maxresdefault.jpg"
                        alt="space shuttle"
                    />
                    <Caption label="Alt='space shuttle'" />
                </Box>
                <Box>
                    <img
                        tabIndex="1"
                        src="https://i.ytimg.com/vi/WVKOxdgZxT0/maxresdefault.jpg"
                        alt=""
                    />
                    <Caption label="Alt=' '" />
                </Box>
            </Section>
        </>
    );
}
