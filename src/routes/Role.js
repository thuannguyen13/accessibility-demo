import Button from "../components/Button/Button";
import Caption from "../components/Caption/Caption";
import Section from "../components/Section/Section";
import "../styles/style.scss";

import Intro from "../components/Intro/Intro";

export default function Role() {
    return (
        <>
            <Section>
                <Intro
                    title="HTML Role Attribute"
                    description="The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers."
                />
            </Section>
            <Section>
                <div className="box">
                    <Button tabIndex="1" />
                    <Caption label="Native <button> element" />
                </div>
                <div className="box">
                    <span tabIndex="1" className="button">
                        Button
                    </span>
                    <Caption label="A <span> element" />
                </div>

                <div className="box">
                    <span tabIndex="1" role="button" className="button">
                        Button
                    </span>
                    <Caption label="A <span> element with button role" />
                </div>
            </Section>
        </>
    );
}
