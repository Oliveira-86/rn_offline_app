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

    console.log("thunk", data);

    return loadedPost;
  } catch (error) {
    return rejectWithValue("Opps there seems to be an error");
  }
});

export const createPost = createAsyncThunk("post/createPost", async (post) => {
  console.log("thunk", post);

  try {
    const { data } = await api.postPost(post);
    console.log("data", data);
    return data;
  } catch (error) {
    return error;
  }
});

// export const updatePost = createAsyncThunk(
//   "posts/getPosts",
//   async (updatePost) => {
//     try {
//       await api.updatePost(updatePost);
//       const loadedPost = [];

//       for (const key in data) {
//         loadedPost.push(new Post(key, "u1", data[key].description));
//       }

//       console.log("thunk", data);

//       return loadedPost;
//     } catch (error) {
//       return rejectWithValue("Opps there seems to be an error");
//     }
//   }
// );
