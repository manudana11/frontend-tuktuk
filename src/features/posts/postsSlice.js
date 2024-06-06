import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  post: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getAllPosts.fulfilled,(state,action)=>{
        state.posts = action.payload
    })
  }
});


export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
  try {
    return await postsService.getAllPosts()
  } catch (error) {
    console.error(error);
  }
})

export const createPost = createAsyncThunk('posts/createPost', async (post, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  try {
    console.log(post, token);
    return await postsService.createPost(post, token);
  } catch (error) {
    console.error(error);
  }
})


export default postsSlice.reducer;