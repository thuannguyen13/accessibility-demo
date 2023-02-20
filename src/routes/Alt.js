import Caption from "../components/Caption/Caption";
import Intro from "../components/Intro/Intro";
import "../styles/style.scss";

export default function Alt() {
    return (
        <>
            <div className="content">
                <Intro
                    title="Text alternatives for non-text content"
                    description="Text alternatives help users understand the purpose of an image or function. For example, a text alternative for a search button should be 'Search' instead of 'Magnifying lens'"
                />
            </div>
            <div tabIndex="2" className="content">
                <div class="box">
                    <img
                        tabIndex="1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/STS120LaunchHiRes-edit1.jpg/1200px-STS120LaunchHiRes-edit1.jpg"
                        alt="space shuttle"
                    />
                    <Caption label="Alt='space shuttle'" />
                </div>
                <div class="box">
                    <img
                        tabIndex="1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/STS120LaunchHiRes-edit1.jpg/1200px-STS120LaunchHiRes-edit1.jpg"
                        alt=""
                    />
                    <Caption label="Alt=''" />
                </div>
            </div>
        </>
    );
}
