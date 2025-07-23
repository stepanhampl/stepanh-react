
export type RedWelcomeBlockType = "UP" | "DOWN";

interface RedWelcomeBlockProps {
    type: RedWelcomeBlockType;
    text: string;
    language: string;
}

function RedWelcomeBlock({ type, text, language }: RedWelcomeBlockProps) {
    const comeInClass = `come-in ${type === "UP" ? "come-in-up" : "come-in-down"}`;
    const href = `markups/${language}/about.html`
    return (
        <a href={href}>
            <div className={comeInClass}>
                <div className="inside-come-in">{text}</div>
            </div>
        </a>
    );
}

export default RedWelcomeBlock;
