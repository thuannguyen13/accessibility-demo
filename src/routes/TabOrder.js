import Button from "../components/Button/Button";
import Caption from "../components/Caption/Caption";
import Intro from "../components/Intro/Intro";
import Code from "../components/Code/Code";

export default function TabOrder() {
    const example1 = `<button> Button 1 </button>`;
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
                    <Button label="Button 1" />
                    <Button label="Button 2" />
                    <Button label="Button 3" />
                    <Caption>
                        <strong>Normal order</strong>
                        <ul>
                            <li>&lt;button&gt; Button 1 &lt;/button&gt;</li>
                            <li>&lt;button&gt; Button 2 &lt;/button&gt;</li>
                            <li>&lt;button&gt; Button 3 &lt;/button&gt;</li>
                        </ul>
                    </Caption>
                </div>
                <div className="box vertical">
                    <Button label="Button 3" />
                    <Button label="Button 2" />
                    <Button label="Button 1" />

                    <Caption>
                        <strong>Flipped order</strong>
                        <ul>
                            <li>&lt;button&gt; Button 3 &lt;/button&gt;</li>
                            <li>&lt;button&gt; Button 2 &lt;/button&gt;</li>
                            <li>&lt;button&gt; Button 1 &lt;/button&gt;</li>
                        </ul>
                    </Caption>
                </div>
                <div className="box vertical">
                    <Button tabIndex="3" label="Button 3" />
                    <Button tabIndex="2" label="Button 2" />
                    <Button tabIndex="1" label="Button 1" />

                    <Caption>
                        <strong>Flipped order with modified tab order</strong>
                        <ul>
                            <li>
                                &lt;button tabindex="3"&gt; Button 3
                                &lt;/button&gt;
                            </li>
                            <li>
                                &lt;button tabindex="2"&gt; Button 2
                                &lt;/button&gt;
                            </li>
                            <li>
                                &lt;button tabindex="1"&gt; Button 1
                                &lt;/button&gt;
                            </li>
                        </ul>
                    </Caption>
                </div>
            </div>
        </>
    );
}
