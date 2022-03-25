import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const signupPost = createAsyncThunk(
  "signup/signupPost",
  async (formData) => {
    try {
      const { data } = await api.signup(formData);
      
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export const loginPost = createAsyncThunk(
  "login/loginPost",
  async (formData) => {
    try {
      const { data } = await api.login(formData);
      
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);
