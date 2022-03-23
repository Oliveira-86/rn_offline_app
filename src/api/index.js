import axios from "axios";

const API = axios.create({
  baseURL: "https://offlinefirst-f0faf-default-rtdb.firebaseio.com",
});

const config = {
  headers: { "Content-Type": "application/json" },
};

export const fetchPosts = () => API.get("/posts.json");
export const postPost = (newPost) => API.post("/posts.json", newPost, config);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}.json`, updatedPost, config);
