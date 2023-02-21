import Button from "../components/Button/Button";
import Intro from "../components/Intro/Intro";
import TextBox from "../components/TextBox/TextBox";

export default function KeyboardInput() {
    return (
        <>
            <div className="content">
                <Intro
                    title="Different input modalities beyond mouse"
                    description="Input modalities beyond mouse (e.g. keyboard, touch, voice recognition, gestures) make content easier to use. Design considerations must be taken to maximize their benefit, such as considering different users' abilities to use them.
                    "
                />
            </div>
            <div className="content">
                <div className="card">
                    <div>
                        <h3>Personal Information</h3>
                        <p className="no-margin">
                            Try to use <kbd>TAB</kbd> to navigate between input
                            fields
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
            </div>
            <div className="content">
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
            </div>
        </>
    );
}
