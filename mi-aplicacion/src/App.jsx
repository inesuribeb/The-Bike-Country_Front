import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home/Home";
import Experiences from "./pages/experiences/Experiences";

function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState("experiences");
    const components = {
        home: Home, 
        experiences: Experiences
    };

    const Component = components[page];
    return <Component />;
}

export default App;
