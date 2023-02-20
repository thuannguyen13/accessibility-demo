import "./Sidebar.scss";

export default function Link({ href, label }) {
    return (
        <a className="link" href={href}>
            {label}
        </a>
    );
}
