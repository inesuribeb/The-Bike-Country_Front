import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState("contact");
    const components = {
        home: Home,
        contact: Contact
    };
    const Component = components[page];
    return <Component />;
}

export default App;
