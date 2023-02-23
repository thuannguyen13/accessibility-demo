import Button from "../components/Button/Button";
import Code from "../components/Code/Code";
import Intro from "../components/Intro/Intro";

export default function TabOrder() {
    const example1 = `
    <button> Button 1 </button>
    <button> Button 2 </button>
    <button> Button 3 </button>
    `;

    const example2 = `
    // Reversed by CSS
    <button> Button 1 </button>
    <button> Button 2 </button>
    <button> Button 3 </button>
    `;

    const example3 = `
    // Reversed by CSS
    <button tabindex="3"> Button 1 </button>
    <button tabindex="2"> Button 2 </button>
    <button tabindex="1"> Button 3 </button>
    `;
    return (
        <>
            <div className="content">
                <Intro
                    title="Tab order"
                    description="The tab order is the order in which a user moves focus from one control to another by pressing the Tab key. Each form has its own tab order. By default, the tab order is the same as the order in which you created the controls. Tab-order numbering begins with zero and ascends in value, and is set with the TabIndex property."></Intro>
            </div>

            <div className="content">
                <div className="box vertical">
                    <h2>Normal order</h2>
                    <Button tabIndex="1" label="Button 1" />
                    <Button tabIndex="1" label="Button 2" />
                    <Button tabIndex="1" label="Button 3" />
                    <Code language="html" code={example1} />
                </div>
            </div>

            <div className="content">
                <div className="box vertical">
                    <div>
                        <h2>Visually reversed but HTML structure stay the same</h2>
                        <p></p>
                    </div>

                    <div className="vertical-reverse">
                        <Button tabIndex="2" label="Button 1" />
                        <Button tabIndex="2" label="Button 2" />
                        <Button tabIndex="2" label="Button 3" />
                    </div>
                    <Code language="html" code={example2} />
                </div>
            </div>

            <div className="content">
                <div className="box vertical">
                    <h2>Visually reversed but with modified tab order to match HTML Focus order</h2>
                    <div className="vertical-reverse">
                        <Button tabIndex="5" label="Button 1" />
                        <Button tabIndex="4" label="Button 2" />
                        <Button tabIndex="3" label="Button 3" />
                    </div>
                    <Code language="html" code={example3} />
                </div>
            </div>
        </>
    );
}
