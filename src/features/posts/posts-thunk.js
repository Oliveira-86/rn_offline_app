import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import Post from "../../models/post";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await api.fetchPosts();
    const loadedPost = [];

    console.log(data)

    for (const key in data) {
      loadedPost.push(new Post(key, "u1", data[key].description));
    }

    return loadedPost;
  } catch (error) {
    return rejectWithValue("Opps there seems to be an error");
  }
});

export const createPost = createAsyncThunk(
  "post/createPost",
  async (post, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    try {
      const { data } = await api.postPost(post, token);

      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export const updateUserPost = createAsyncThunk(
  "posts/updatePost",
  async (updatePost, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    const obj = {
      description: updatePost.description,
      ownerId: updatePost.ownerId,
    };

    try {
      const { data } = await api.updatePost(updatePost.id, obj, token);
      console.log("thunk update", data);

      return data;
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  "posts/deletePost",
  async (id, { getState }) => {
    const state = getState()
    const token = state.auth.token;

    try {
      await api.deletePost(id, token);

      return id;
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);
