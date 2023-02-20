import Caption from "../components/Caption/Caption";
import "../styles/style.scss";

export default function Alt() {
    return (
        <>
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
