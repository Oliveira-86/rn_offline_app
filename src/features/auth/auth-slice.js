import { createSlice } from "@reduxjs/toolkit";
import { loginPost, signupPost } from "./auth-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  token: null,
  userId: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },

    logout: (state) => {
      AsyncStorage.removeItem('userData');
      state.token = null;
      state.userId = null;
    },
  },
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
      state.token = action.payload.idToken;
      state.userId = action.payload.localId;
      state.loading = false;
    },
    [signupPost.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
