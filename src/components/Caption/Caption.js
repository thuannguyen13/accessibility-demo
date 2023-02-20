import "./Caption.scss";

export default function Caption({ label }) {
    return (
        <>
            <caption tabIndex="-1" className="caption">
                {label}
            </caption>
        </>
    );
}
