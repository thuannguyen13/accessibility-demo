import Button from "../components/Button/Button";
import Caption from "../components/Caption/Caption";
import Code from "../components/Code/Code";
import Intro from "../components/Intro/Intro";

export default function TabOrder() {
    const example1 = `
    <button> Button 1 </button>
    <button> Button 2 </button>
    <button> Button 3 </button>
    `;

    const example2 = `
    <button> Button 3 </button>
    <button> Button 2 </button>
    <button> Button 1 </button>
    `;

    const example3 = `
    <button tabindex="3"> Button 3 </button>
    <button tabindex="2"> Button 2 </button>
    <button tabindex="1"> Button 1 </button>
    `;
    return (
        <>
            <div className="content">
                <Intro
                    title="Tab order"
                    description="The tab order is the order in which a user moves focus from
                    one control to another by pressing the Tab key. Each form
                    has its own tab order. By default, the tab order is the same
                    as the order in which you created the controls. Tab-order
                    numbering begins with zero and ascends in value, and is set
                    with the TabIndex property."
                ></Intro>
            </div>

            <div className="content">
                <div className="box vertical">
                    <h2>Normal order</h2>
                    <Button label="Button 1" />
                    <Button label="Button 2" />
                    <Button label="Button 3" />
                    <Code language="html" code={example1} />
                </div>
            </div>

            <div className="content">
                <div className="box vertical">
                    <h2>Flipped order</h2>
                    <Button label="Button 3" />
                    <Button label="Button 2" />
                    <Button label="Button 1" />
                    <Code language="html" code={example2} />
                </div>
            </div>

            <div className="content">
                <div className="box vertical">
                    <h2>Flipped order with modified tab order</h2>
                    <Button tabIndex="3" label="Button 3" />
                    <Button tabIndex="2" label="Button 2" />
                    <Button tabIndex="1" label="Button 1" />
                    <Code language="html" code={example3} />
                </div>
            </div>
        </>
    );
}
