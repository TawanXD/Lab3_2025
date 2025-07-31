import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/TawanXD/Lab3_2025/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getEvents() {
        return apiClient.get("/events");
    },
    getEventById(id: number) {
        return apiClient.get('/events/'+id);
    },
};