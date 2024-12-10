import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/navbar/NavBar";
import Sections from "./components/sections/Sections";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <header>
            <NavBar></NavBar>
        </header>
        <main>
            <Sections></Sections>
        </main>
    </StrictMode>
);
