import { createSlice } from "@reduxjs/toolkit";
import { loginPost, signupPost } from "./auth-thunk";

const initialState = {
  token: null,
  userId: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [loginPost.pending]: (state) => {
      state.loading = true;
    },
    [loginPost.fulfilled]: (state, action) => {
      state.token = action.payload.idToken;
      state.userId = action.payload.localId;
      state.loading = false;
    },
    [loginPost.rejected]: (state) => {
      state.loading = false;
    },

    [signupPost.pending]: (state) => {
      state.loading = true;
    },
    [signupPost.fulfilled]: (state, action) => {
      console.log("slice", action.payload);
      state.token = action.payload.idToken;
      state.userId = action.payload.localId;
      state.loading = false;
    },
    [signupPost.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;