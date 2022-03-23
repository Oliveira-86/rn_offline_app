import { createSlice } from "@reduxjs/toolkit";
import { createPost, getPosts } from "./posts-thunk";

const initialState = {
  posts: [],
  loading: false,
};
console.log("initialState", initialState.posts);

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
    [getPosts.rejected]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
    },
    // createPosts
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      console.log("ful action", action.payload);
      let list = [];
      list.concat(action.payload);
      console.log("ful list", list);

      state.posts = action.payload;
      state.loading = false;
      
    },
    [createPost.rejected]: (state, action) => {
      console.log("reject", action.payload);
      state.loading = false;
    },
  },
});

export default postsSlice.reducer;
