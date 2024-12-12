import "./Intro.css";

function Intro({ title, content, imageUrl, className }) {
    return (
        <div
            className={`intro-section ${className || ""}`} // Combina clases dinámicamente
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <h1>{title}</h1>
            <h2>{content}</h2>
        </div>
    );
}

export default Intro;
