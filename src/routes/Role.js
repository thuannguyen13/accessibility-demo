import Button from "../components/Button";
import Section from "../components/Section";
import "../styles/style.scss";

import Intro from "../components/Intro";
import Box from "../components/Box";

export default function Role() {
    return (
        <>
            <Section>
                <Intro title="HTML Role Attribute" description="The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers." />
            </Section>
            <Section>
                <Box title="Native <button> element">
                    <Button tabIndex="1" />
                </Box>
                <Box title="A <span> element">
                    <span tabIndex="1" className="button">
                        Button
                    </span>
                </Box>
                <Box title="A <span> element with button role">
                    <span tabIndex="1" role="button" className="button">
                        Button
                    </span>
                </Box>
            </Section>
        </>
    );
}
