import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from './authService'

const initialState = {
  user: null,
  token: '',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

export const register = createAsyncThunk('auth/register', async (user) => {
  try {
    console.log(user)
    return authService.register(user)
  } catch (error) {
    console.error(error);
  }
})
