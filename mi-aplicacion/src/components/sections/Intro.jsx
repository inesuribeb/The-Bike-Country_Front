function Intro({ title, content, imageUrl }) {
    return (
        <div
            className="intro-section"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <h1>{title}</h1>
            <h2>{content}</h2>
        </div>
    );
}
export default Intro;
