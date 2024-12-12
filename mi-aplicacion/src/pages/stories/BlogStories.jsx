import { useState } from "react";
import Post from "./Post";

function BlogStories() {
    const [posts, setPosts] = useState([

     
        {
            id: 1,
            image: "https://www.lugaresdeaventura.com/sites/default/files/inline-images/Col-aubisque.jpg",
            title: "From France to Navarra",
            content: "I've always dreamed of crossing the Pyrenees by mountain bike. This summer, I finally got to make that dream a reality.",
            client: "Crístobal Fernández"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1528847578840-009f1a2c229c",
            title: "Sailing the Mediterranean",
            content: "A week-long sailing adventure from Barcelona to Mallorca, exploring hidden coves and experiencing the true beauty of the Mediterranean.",
            client: "Elena Rodriguez"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1529963183134-6c5c5e5fe9f9",
            title: "Camino de Santiago Pilgrimage",
            content: "Walking the ancient pilgrimage route from the Pyrenees to Santiago de Compostela. A journey of self-discovery and spiritual awakening.",
            client: "Miguel Ángel Torres"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1551632811-561732d43736",
            title: "Hiking the Picos de Europa",
            content: "A challenging trek through the stunning limestone peaks of northern Spain, with breathtaking views and encounters with local wildlife.",
            client: "Laura Martínez"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1597356894374-e5cbb697f506",
            title: "Surfing the Basque Coast",
            content: "Catching waves along the rugged Basque coastline, from San Sebastián to Biarritz. A perfect blend of adventure and surf culture.",
            client: "Javier Sánchez"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            title: "Mountain Climbing in Andorra",
            content: "A thrilling expedition scaling the peaks of the Pyrenean principality, challenging myself physically and mentally.",
            client: "Ana Fernández"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1528847574373-56ba8fe9578d",
            title: "Wine Route Through La Rioja",
            content: "A cycling tour through the famous wine region, stopping at historic vineyards and sampling world-class Spanish wines.",
            client: "Pedro García"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83",
            title: "Kayaking the Costa Brava",
            content: "Exploring the stunning rocky coastline of Catalonia by kayak, discovering hidden beaches and crystal-clear waters.",
            client: "María López"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1530789253388-582c481c54b7",
            title: "Trekking the Sierra Nevada",
            content: "A week-long adventure in the highest mountain range in mainland Spain, experiencing diverse landscapes and challenging trails.",
            client: "David Ruiz"
        }
    ]);

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