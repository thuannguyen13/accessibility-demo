import "./Sidebar.scss";

export default function Link({ href, label }) {
    return (
        <a tabIndex="-1" className="link" href={href}>
            {label}
        </a>
    );
}
