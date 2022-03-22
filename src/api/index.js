import axios from "axios";

const API = axios.create({ baseURL: "https://offlinefirst-f0faf-default-rtdb.firebaseio.com" });

export const fetchProducts = () => API.get('/products.json');