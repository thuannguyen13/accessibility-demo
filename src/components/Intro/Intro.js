import "./Intro.scss";

export default function Intro({ title, description }) {
    return (
        <>
            <div className="intro">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    );
}
