import { useEffect } from "react";
import Prism from "prismjs";
import "./code.scss";
import "./languageTheme.scss";

export default function Code({ code, language = "html" }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <div className="code">
                <pre>
                    <code className={`language-${language}`}>{code}</code>
                </pre>
            </div>
        </>
    );
}
