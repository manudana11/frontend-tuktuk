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
});

export const createPost = createAsyncThunk('posts/createPost', async (post, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  try {
    return await postsService.createPost(post, token);
  } catch (error) {
    console.error(error);
  }
});

export const likePost = createAsyncThunk('posts/likePost', async (_id) => {
  try {
    return await postsService.likePost(_id);
  } catch (error) {
    console.error(error);
  }
});

export const removeLikePost = createAsyncThunk('posts/dislikes', async (_id) => {
  try {
    return await postsService.removeLikePost(_id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostById = createAsyncThunk('post/getPostById', async (_id) => {
  try {
    return await postsService.getPostById(_id);
  } catch (error) {
    console.error(error);
  }
});

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
    .addCase(likePost.fulfilled,(state, action) => {
      const postUpdated = state.posts.map(post => {
        if (post._id == action.payload._id) {
          post = action.payload
        }
        return post
      })
      state.posts = postUpdated
      if (state.post && state.post._id === action.payload._id) {
        state.post = action.payload;
      }
    })
    .addCase(removeLikePost.fulfilled,(state, action) => {
      const postUpdated = state.posts.map(post => {
        if (post._id == action.payload._id) {
          post = action.payload
        }
        return post
      })
      state.posts = postUpdated
      if (state.post && state.post._id === action.payload._id) {
        state.post = action.payload;
      }
    })
    .addCase(getPostById.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getPostById.fulfilled,(state,action)=>{
        state.status = 'succeeded';
        state.post = action.payload;
    })
    .addCase(getPostById.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
});


export default postsSlice.reducer;