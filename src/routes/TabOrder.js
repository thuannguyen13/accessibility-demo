import Button from "../components/Button";
import Code from "../components/Code";
import Intro from "../components/Intro";
import Box from "../components/Box";
import Section from "../components/Section";

export default function TabOrder() {
    const code = {
        example1: `<button> Button 1 </button> 
<button> Button 2 </button>
<button> Button 3 </button>`,

        example2: `// Reversed by CSS
<button> Button 1 </button>
<button> Button 2 </button>
<button> Button 3 </button>`,

        example3: `// Reversed by CSS
<button tabindex="3"> Button 1 </button>
<button tabindex="2"> Button 2 </button>
<button tabindex="1"> Button 3 </button>`,
    };
    return (
        <>
            <Section>
                <Intro
                    title="Tab order"
                    description="The tab order is the order in which a user moves focus from one control to another by pressing the Tab key. Each form has its own tab order. By default, the tab order is the same as the order in which you created the controls. Tab-order numbering begins with zero and ascends in value, and is set with the TabIndex property."></Intro>
            </Section>

            <Section>
                <Box title="Normal order">
                    <div className="vertical">
                        <Button tabIndex="1" label="Button 1" />
                        <Button tabIndex="1" label="Button 2" />
                        <Button tabIndex="1" label="Button 3" />
                    </div>
                    <Code language="html" code={code.example1} />
                </Box>
            </Section>
            <Section>
                <Box title="Visually reversed but HTML structure stay the same">
                    <div className="vertical-reverse">
                        <Button tabIndex="2" label="Button 1" />
                        <Button tabIndex="2" label="Button 2" />
                        <Button tabIndex="2" label="Button 3" />
                    </div>
                    <Code language="html" code={code.example2} />
                </Box>
            </Section>
            <Section>
                <Box title="Visually reversed but with modified tab order to match HTML Focus order">
                    <div className="vertical-reverse">
                        <Button tabIndex="5" label="Button 1" />
                        <Button tabIndex="4" label="Button 2" />
                        <Button tabIndex="3" label="Button 3" />
                    </div>
                    <Code language="html" code={code.example3} />
                </Box>
            </Section>
        </>
    );
}
