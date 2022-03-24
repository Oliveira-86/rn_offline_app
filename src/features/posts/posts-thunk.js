import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import Post from "../../models/post";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await api.fetchPosts();
    const loadedPost = [];

    for (const key in data) {
      loadedPost.push(new Post(key, "u1", data[key].description));
    }

    return loadedPost;
  } catch (error) {
    return rejectWithValue("Opps there seems to be an error");
  }
});

export const createPost = createAsyncThunk("post/createPost", async (post) => {
  try {
    const { data } = await api.postPost(post);

    return data;
  } catch (error) {
    return error;
  }
});

export const updateUserPost = createAsyncThunk(
  "posts/updatePosts",
  async (updatePost) => {
    const obj = {
      description: updatePost.description,
      ownerId: updatePost.ownerId,
    };

    try {
      const { data } = await api.updatePost(updatePost.id, obj);
      const loadedPost = [];

      

      return loadedPost;
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  "posts/deletePosts",
  async (id) => {  
    try {
     await api.deletePost(id);

     return id;
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);
