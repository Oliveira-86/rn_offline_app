import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        try {
            const res = await fetch(title);
            const resData = res.json();

            return resData;
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
        } 
    } 
);

export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (title, description, imageUrl, price) => {
        try {
            
        } catch (error) {
            
        }
    }
)