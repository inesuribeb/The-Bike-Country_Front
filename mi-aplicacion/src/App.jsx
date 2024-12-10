import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home/Home";
function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState("home");
    const components = {
        home: Home,
    };
    const Component = components[page];
    return <Component />;
}

export default App;
