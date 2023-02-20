import { useEffect } from "react";
import Prism from "prismjs";
import "./Code.scss";
import "./LanguageTheme.scss";

export default function Code({ code, language }) {
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
