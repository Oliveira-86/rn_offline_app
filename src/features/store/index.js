import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./../posts/posts-slice";
import authReducer from "../auth/auth-slice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
