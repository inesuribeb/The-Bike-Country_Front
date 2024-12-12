import { useState } from "react";
import Post from "./Post";
import "./BlogStories.css";

function BlogStories() {
    const [posts, setPosts] = useState([

        {
            id: 1,
            image: "https://www.lugaresdeaventura.com/sites/default/files/inline-images/Col-aubisque.jpg",
            title: "From France to Navarra",
            content: `"I've always dreamed of crossing the Pyrenees by mountain bike. This summer, I finally got to make that dream a reality."`,
            client: "Crístobal Fernández"
        },
        {
            id: 2,
            image: "https://admin.iberocycle.com/storage/tour_images/3707/Coast_of_Green_Spain__Picos_de_Europa_45.jpg",
            title: "Cantabrian Mountain Trail",
            content: `"An epic mountain bike adventure through Cantabria's stunning mountain ranges, discovering remote villages, lush forests, and challenging mountain passes."`,
            client: "Sarah Williams"
        },
        {
            id: 3,
            image: "https://www.basquemtb.com/wp-content/uploads/Pyrenees-Odyssey-12.jpg",
            title: "Pyrenean Basque Border Expedition",
            content: `"Exploring the rugged mountain trails connecting the French Pyrenees with the Spanish Basque Country, challenging terrain and incredible mountain landscapes."`,
            client: "Michael Rodriguez"

        },
        {
            id: 4,
            image: "https://images.singletracks.com/blog/wp-content/uploads/2016/12/DSC03406.jpg",
            title: "Pyrenean Mountain Challenge",
            content: `"A week-long mountain bike expedition through the most challenging passes of the Pyrenees, testing limits and enjoying spectacular mountain views."`,
            client: "Javier López"
        },
        {
            id: 5,
            image: "https://lh3.googleusercontent.com/ci/AL18g_SEqGXcNyRmOXSapNEZNbxAwV03o1i2lNHBQzM9sVe8mWZbNXrkV2Cf16qgWjR02pS6qNZ2wSY=s1200",
            title: "Basque Greenways and Historic Routes",
            content: `"Following the ancient railway paths and historic cycling routes through the Basque Country, connecting vibrant towns and experiencing rich cultural landscapes."`,
            client: "David García"
        },
        {
            id: 6,
            image: "https://www.destination-biarritz.fr/app/uploads/iris-images/4384/veloroute-v81-biarritz-villa-belza-a-adt64-gaillard-munsch-2023-1920x1080-f50_50.webp",
            title: "Bilbao to Biarritz Cross-Border Adventure",
            content: `"An incredible cross-border cycling route connecting two iconic cities, traversing diverse landscapes from urban centers to rural mountain trails."`,
            client: "Alex Martinez"
        },
        {
            id: 7,
            image: "https://www.levelovoyageur.com/doc/photos/photos/bpb0301/sejour-velo-pays-basque.jpg",
            title: "Basque Country Bike Expedition",
            content: `"Navigating the challenging terrain of the Basque Country, from coastal routes to mountain trails, experiencing the region's unique culture and landscapes."`,
            client: "Elena García"
        },
        {
            id: 8,
            image: "https://static.eldiario.es/clip/39f96e96-f61d-46da-8c6e-e01a2484c828_16-9-discover-aspect-ratio_default_0.jpg",
            title: "Hondarribi Coastal and Historic Route",
            content: `"A captivating bicycle journey exploring the stunning coastal town of Hondarribia, navigating through its medieval old town, riding along the picturesque Bay of Biscay, and crossing the border to explore the French side of the Txingudi Bay, experiencing the unique borderland landscapes and rich cultural heritage."`,
            client: "María Martínez"
        },
        {
            id: 9,
            image: "https://eu-assets.simpleview-europe.com/midulster/imageresizer/?image=%2Fdbimgs%2FGallery-Davagh-Forest-Trails-Eagles-Rock.jpg&action=FeaturedItemsScroll20193x2",
            title: "The Basque Borderlands Trail",
            content: `"A challenging mountain bike expedition tracing the intricate border between France and Spain, exploring remote mountain passes, ancient shepherd trails, and breathtaking landscape transitions from the Atlantic Pyrenees to the heart of Basque country."`,
            client: "Thomas Henderson"

        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1533577180227-46c487ddab58",
            title: "Txingudi Bay Cycling Adventure",
            content: "A scenic bicycle route connecting Hondarribia, Irun, and the French border town of Hendaye, exploring the unique cross-border landscape of the Txingudi Bay, with stunning views of the Pyrenees and the Atlantic coastline.",
            client: "Carlos Rodríguez"
        },
        {
            id: 11,
            image: "https://images.unsplash.com/photo-1530577197743-7adf14294584",
            title: "Pasaia to San Sebastián Coastal Trail",
            content: "An exhilarating bike journey along the rugged Gipuzkoa coastline, starting from the historic maritime town of Pasaia and winding through scenic routes to the vibrant city of San Sebastián, experiencing the Basque Country's most beautiful coastal landscapes.",
            client: "María García"
        },
        {
            id: 12,
            image: "https://images.unsplash.com/photo-1531761535596-52d43cae0887",
            title: "Oiartzun Valley Mountain Bike Expedition",
            content: "A challenging mountain bike route through the lush Oiartzun Valley, exploring rural Basque landscapes, ancient forests, traditional farmhouses, and hidden mountain trails with breathtaking views of the surrounding mountains.",
            client: "Javier Fernández"
        }

    ]);

    const [lastId, setLastId] = useState(9);


    /*

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
*/
    return (
        <section className="blog-stories">
            <section className="posts">
                {posts.map(post => (
                    <Post data={post} key={post.id} />
                ))}
            </section>
        </section>
    )
}
export default BlogStories;