import Button from "../components/Button/Button";
import Caption from "../components/Caption/Caption";

export default function TabOrder() {
    return (
        <>
            <div className="content">
                <div className="box vertical">
                    <Button label="Button 1" />
                    <Button label="Button 2" />
                    <Button label="Button 3" />
                    <Caption>
                        <strong>Normal button order</strong>
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
                        <strong>Flipped button order</strong>
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
                        <strong>
                            Flipped button order with modified tab order
                        </strong>
                        <ul>
                            <li>
                                &lt;button tabindex="3"&gt; Button 3
                                &lt;/button&gt;
                            </li>
                            <li>
                                &lt;button tabindex="2"&gt; Button 3
                                &lt;/button&gt;
                            </li>
                            <li>
                                &lt;button tabindex="1"&gt; Button 3
                                &lt;/button&gt;
                            </li>
                        </ul>
                    </Caption>
                </div>
            </div>
        </>
    );
}
