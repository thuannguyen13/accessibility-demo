import Button from "../components/Button/Button";
import Intro from "../components/Intro/Intro";
import Section from "../components/Section/Section";
import TextBox from "../components/TextBox/TextBox";

export default function KeyboardInput() {
    return (
        <>
            <Section>
                <Intro
                    title="Different input modalities beyond mouse"
                    description="Input modalities beyond mouse (e.g. keyboard, touch, voice recognition, gestures) make content easier to use. Design considerations must be taken to maximize their benefit, such as considering different users' abilities to use them.
                    "
                />
            </Section>
            <Section>
                <div className="card">
                    <div>
                        <h3>Personal Information</h3>
                        <p className="no-margin">
                            Try to use <kbd>TAB</kbd> to navigate between input fields
                        </p>
                    </div>
                    <TextBox label="First Name" />
                    <TextBox label="Last Name" />
                    <TextBox label="Email" />
                    <TextBox label="Phone Number" />
                    <div className="card-footer">
                        <Button label="Submit" />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="card">
                    <div>
                        <h3>Work Information</h3>
                    </div>

                    <TextBox label="Title" />
                    <TextBox label="Department" />
                    <div className="card-footer">
                        <Button label="Submit" />
                    </div>
                </div>
            </Section>
        </>
    );
}
