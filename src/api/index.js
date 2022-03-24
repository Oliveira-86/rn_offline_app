import axios from "axios";

const API = axios.create({
  baseURL: "https://offlinefirst-f0faf-default-rtdb.firebaseio.com",
});

const API_SIGNUP = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDi1-shdgFHlyhHkIdSqG3NxVqAzjBKPUs",
});

const API_LOGIN = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDi1-shdgFHlyhHkIdSqG3NxVqAzjBKPUs",
});

const config = {
  headers: { "Content-Type": "application/json" },
};

export const fetchPosts = () => API.get("/posts.json");
export const postPost = (newPost) => API.post("/posts.json", newPost, config);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}.json`, updatedPost, config);
export const deletePost = (id) => API.delete(`/posts/${id}.json`);

export const signup = (formData) => API_SIGNUP.post('', formData, config);
export const login = (formData) => API_LOGIN.post('', formData, config);
