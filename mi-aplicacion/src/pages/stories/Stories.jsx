// import "./Stories.css";
import NavBar from "../../components/navbar/NavBar";
import Intro from '../../components/sections/Intro';
import FormStories from "./FormStories";
import BlogStories from './BlogStories';


function Stories() {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <Intro
                title={"Stories"}
                content={""}
                imageUrl={"https://www.belgradeadventure.com/wp-content/uploads/2018/11/bike-trip-friends-cycling-163305.jpeg"}>
            </Intro>
            <main>
                <FormStories></FormStories>
            </main>
        </>
    );
}

export default Stories;
