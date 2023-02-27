import "./caption.scss";

export default function Caption({ label, children }) {
    return (
        <>
            <div tabIndex="-1" className="caption">
                {label} {children}
            </div>
        </>
    );
}
