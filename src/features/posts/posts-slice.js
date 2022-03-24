import { createSlice } from "@reduxjs/toolkit";
import { createPost, getPosts, updateUserPost, deleteUserPost } from "./posts-thunk";

const initialState = {
  posts: [],
  loading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // getPosts
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
    
    // createPosts
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [createPost.rejected]: (state) => {
      state.loading = false;
    },

    // updatePost
    [updateUserPost.pending]: (state) => {
      state.loading = true;
    },
    [updateUserPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [updateUserPost.rejected]: (state, action) => {
      state.loading = false;
    },

     // deletePost
     [deleteUserPost.pending]: (state) => {
      state.loading = true;
    },
    [deleteUserPost.fulfilled]: (state, action) => {
      console.log("ful action", action.payload);
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.loading = false;
    },
    [deleteUserPost.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postsSlice.reducer;
