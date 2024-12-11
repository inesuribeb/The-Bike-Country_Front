const BASE_URL = "http://localhost:3004";

async function fetchData(pathName, method = "GET", body = null) {
    try {
        const url = new URL(BASE_URL);
        url.pathname = pathName;

        const options = {
            method,
            headers: {
                accept: "application/json",
                "Content-Type": body ? "application/json" : undefined,
            },
            body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url.toString(), options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
export async function obtenerPacks() {
    try {
        const packs = await fetchData("pack/api/packs");
        return packs.data;
    } catch (error) {
        console.error("Error al obtener packs:", error);
    }
}
export async function workerLogin() {
    try {
        const body = {
            email: "inesuribeb@gmail.com",
            password: 12345,
        };

        const token = await fetchData(
            "/worker/api/workers/login",
            "POST",
            body
        );
        return token;
    } catch (error) {
        console.error("Error al obtener packs:", error);
    }
}
