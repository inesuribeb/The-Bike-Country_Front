import { useState, useEffect } from "react";
import { PageContext } from "./utils/js/context/PageContext.js";
import "./App.css";
import Home from "./pages/home/Home";
import Experiences from "./pages/experiences/Experiences";
import Contact from "./pages/contact/Contact";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ClientProfile from './pages/clientProfile/ClientProfile'
import Stories from "./pages/stories/Stories";
// import Contact from "./pages/contact/Contact";
import { obtenerPacks, workerLogin } from "./utils/js/apiCallController.js";

function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState("home");
    const [packs, setPacks] = useState(null);
    useEffect(() => {
        async function getPacks() {
            const data = await obtenerPacks();
            console.log("Packs obtenidos:", data);
            setPacks(data);
        }
        async function loginByWorker() {
            const data = await workerLogin();
            console.log("Token obtenido:", data);
        }
        
    }, []);
    useEffect(() => {
        console.log("Page cambiada a:", page);
        window.scrollTo({
            top: 0,
        });
    }, [page]);
    const components = {
        home: Home,
        experiences: Experiences,
        contact: Contact,
        auth: Login,
        register: Register,
        clientProfile: ClientProfile,
        stories: Stories,
        // contact: Contact,
    };
    const Component = components[page];
    return (
        <PageContext.Provider value={{ page, setPage }}>
            <Component />
        </PageContext.Provider>
    );
}

export default App;
