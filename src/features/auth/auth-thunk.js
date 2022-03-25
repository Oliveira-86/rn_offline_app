import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signupPost = createAsyncThunk(
  "signup/signupPost",
  async (formData) => {
    try {
      const { data } = await api.signup(formData);
      
      const expirationDate =  new Date(new Date().getTime() + parseInt(data.expiresIn) * 1000);
      saveDataToStorage(data.idToken, data.localId, expirationDate);
      
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

      const expirationDate =  new Date(new Date().getTime() + parseInt(data.expiresIn) * 1000);
      saveDataToStorage(data.idToken, data.localId, expirationDate);    
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export const saveDataToStorage = (token, userId, expirationDate) => {
  AsyncStorage.setItem('userData', JSON.stringify({
    token: token,
    userId: userId,
    expiryDate: expirationDate.toISOString(),
  }))
}