import { useState } from "react";
import Post from "./Post";

function Stories() {
    const [posts, setPosts] = useState([
    //const [lastId, setLastId] = useState(0);
        {
            id: 1,
            title: "Title 1",
            content: "Content 1",
            owner: "Owner 1"

        }
    ])

    return (
        <section className="stories">
            <section className="stories-container">
                {posts.map(post => (
                    <Post data={post} key={post.id} />
                ))}

            </section>
        </section>
    )

}
export default Stories;