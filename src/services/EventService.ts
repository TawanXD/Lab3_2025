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
    getEvent(perPage: Number, page: Number) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page);
    },
    getEventById(id: number) {
        return apiClient.get('/events/'+id);
    },
};

export const getEventById = (id: string) => {
  return apiClient.get(`/events/${id}`)
}