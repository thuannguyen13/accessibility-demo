import Button from "../components/Button/Button";
import Caption from "../components/Caption/Caption";
import "../styles/style.scss";

export default function Role() {
    return (
        <>
            <div className="content">
                <div class="box">
                    <Button />
                    <Caption label="Native <button> element" />
                </div>
                <div class="box">
                    <span tabIndex="1" className="button">
                        Button
                    </span>
                    <Caption label="A <span> element" />
                </div>

                <div class="box">
                    <span tabIndex="1" role="button" className="button">
                        Button
                    </span>
                    <Caption label="A <span> element with button role" />
                </div>
            </div>
        </>
    );
}
