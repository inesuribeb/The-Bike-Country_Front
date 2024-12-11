function Post({ data }) {
    return (
        <article className = "story">
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            <p>{data.owner} </p>
        </article>

    )
}
export default Post;