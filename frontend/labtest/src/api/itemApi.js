import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getItems = () => API.get("/");
export const addItem = (data) => API.post("/", data);