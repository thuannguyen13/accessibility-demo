import Intro from "../components/Intro/Intro";

export default function StructureOrder() {
    return (
        <>
            <div className="content">
                <Intro title="Structure Order" description="Author: Thuan Nguyen" />
            </div>
            <div className="content">
                <p className="body no-margin">
                    Use screen readers of your preference and choose a demo you want to test. For the sake of simplicity, only the content of the demo is affected by the screen reader.
                </p>
            </div>
        </>
    );
}
