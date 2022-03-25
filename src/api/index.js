import axios from "axios";

const API = axios.create({
  baseURL: "https://offlinefirst-f0faf-default-rtdb.firebaseio.com",
});

const API_SIGNUP = axios.create({
  baseURL:
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDi1-shdgFHlyhHkIdSqG3NxVqAzjBKPUs",
});

const API_LOGIN = axios.create({
  baseURL:
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDi1-shdgFHlyhHkIdSqG3NxVqAzjBKPUs",
});

const config = {
  headers: { "Content-Type": "application/json" },
};

export const fetchPosts = () => API.get("/posts.json");
export const postPost = (newPost, token) => API.post(`/posts.json?auth=${token}`, newPost, config);
export const deletePost = (id, token) => API.delete(`/posts/${id}.json?auth=${token}`);
export const updatePost = (id, updatedPost, token) =>
  API.patch(`/posts/${id}.json?auth=${token}`, updatedPost, config);

export const signup = (formData) => API_SIGNUP.post("", formData, config);
export const login = (formData) => API_LOGIN.post("", formData, config);
