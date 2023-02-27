import "./toast.scss";

export function Toast({ handleClick }) {
    return (
        <>
            <div role="alert" aria-live="assertive" aria-atomic="true" className="toast">
                <p className="toast-message">Toast message goes here.</p>
                <button onClick={handleClick} className="toast-close-btn">
                    x
                </button>
            </div>
        </>
    );
}

export default function ToastList({ children }) {
    return (
        <>
            <div className="toast-container">{children}</div>
        </>
    );
}
