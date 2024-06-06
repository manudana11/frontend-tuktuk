import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  post: null,
  status: 'idle',
  error: null,
};

export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
  try {
    return await postsService.getAllPosts()
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message || error.message)
  }
})

export const createPost = createAsyncThunk('posts/createPost', async (post, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  try {
    return await postsService.createPost(post, token);
    console.log(post, token);
  } catch (error) {
    console.error(error);
  }
})

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(getAllPosts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getAllPosts.fulfilled,(state,action)=>{
        state.status = 'succeeded';
        state.posts = action.payload;
    })
    .addCase(getAllPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
});




export default postsSlice.reducer;