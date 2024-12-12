import { useState } from "react";
import Post from "./Post";

function BlogStories() {
    const [posts, setPosts] = useState([
        //const [lastId, setLastId] = useState(0); (hay que poner esto )
        {
            id: 1,
            title: "Title 1",
            content: "Content 1",
            client: "Client 1"

        }
    ])

    const [lastId, setLastId] = useState(1);


    function handleNewPost(data) {
        const newPost = { ...data, id: lastId + 1 };
        setLastId(lastId => lastId + 1);
        setPosts(oldPosts => [newPost, ...oldPosts]);
    }

    function handleDeletePost(id) {
        setPosts(oldPosts => oldPosts.filter(post => post.id !== id));
    }

    function handleUpdatePost(editedPost) {
        console.log(editedPost);
        setPosts(oldPosts => oldPosts.map(post => {
            if (post.id !== editedPost.id) {
                return post;
            } else {
                return editedPost;
            }
        }))
    }

    return (
        <section className="stories">
            <h1>Stories</h1>
            <section className="posts-container">
                <FormStories
                    onSubmit={handleNewPost}
                />
                </section>
            <section className="posts">
                {posts.map(post => (
                    <Post
                        data={post}
                        key={post.id}
                        onDelete={handleDeletePost}
                        onUpdate={handleUpdatePost}
                    />
                ))}
            </section>   
        </section>
    )

}
export default BlogStories;