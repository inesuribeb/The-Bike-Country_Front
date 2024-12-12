import { useState, useEffect } from "react";
import { PageContext } from "./utils/js/context/PageContext.js";
import "./App.css";
import Home from "./pages/home/Home";
import Experiences from "./pages/experiences/Experiences";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ClientProfile from "./pages/clientProfile/ClientProfile";

// import Contact from "./pages/contact/Contact";
import {
    obtenerPacks,
    workerLogin,
    clientLogin,
    getMyProfile,
} from "./utils/js/apiCallController.js";

function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState("home");
    const [packs, setPacks] = useState(null);
    //Pruebas de la api
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
        async function getClientProfile() {
            const data = await getMyProfile();
            console.log("Perfil obtenido:", data);
        }
        getClientProfile();
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
        auth: Login,
        register: Register,
        clientProfile: ClientProfile,
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
