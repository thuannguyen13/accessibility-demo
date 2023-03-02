import Box from "../components/Box";
import Intro from "../components/Intro";
import Section from "../components/Section";

export default function MarkupReady() {
    return (
        <>
            <Section>
                <Intro
                    title="Markup must communicate as clearly as the design"
                    description={`When working from a design, it’s common to build what we see. However, the visual design is only one part of creating perceivable content. Because some people may not be able to see a visual cue indicating the current page in the navigation, use aria-current="page" to ensure the markup communicates the same as the UI.`}></Intro>
            </Section>
            <Section>
                <Box title={`With aria-current="page"`}>
                    <nav className="nav-demo">
                        <ul>
                            <li>
                                <a href="/MarkupReady">Home</a>
                            </li>
                            <li>
                                <a className="active" href="/MarkupReady" aria-current="page">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/MarkupReady">Blog</a>
                            </li>
                            <li>
                                <a href="/MarkupReady">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </Box>
            </Section>
            <Section>
                <Box title={`Without aria-current="page"`}>
                    <nav className="nav-demo">
                        <ul>
                            <li>
                                <a href="/MarkupReady">Home</a>
                            </li>
                            <li>
                                <a className="active" href="/MarkupReady">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/MarkupReady">Blog</a>
                            </li>
                            <li>
                                <a href="/MarkupReady">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </Box>
            </Section>
        </>
    );
}
