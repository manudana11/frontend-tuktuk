import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from './authService'


const token = localStorage.getItem("token") || '';
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,
  token: token,
  posts: [],
  isError: false,
  isSuccess: false,
  message: '',
  userProfile:null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) =>{
      state.isError = false,
      state.isSuccess = false,
      state.message = ''
    }
  },
  
  extraReducers : (builder) => {
    builder 
    .addCase(login.fulfilled, (state, action)=>{
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.message = action.payload.message;
      state.isSuccess = true;
    })
    .addCase(login.rejected, (state, action) =>{
      state.message = action.payload;
      state.isError = true
    })
    .addCase(logout.fulfilled, (state) =>{
      state.user = null,
      state.token = ''
    })
    .addCase(getLoggedUser.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getLoggedUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.posts = action.payload.postsIds; 
    })
    .addCase(getLoggedUser.rejected, (state, action) => {
      state.status = 'failed';
      state.isError = action.error.message;
    })
    .addCase(getUserByName.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.userProfile = action.payload
    })
  }
});

export default authSlice.reducer;

export const register = createAsyncThunk('auth/register', async (user) => {
  try {
    console.log(user)
    return authService.register(user)
  } catch (error) {
    console.error(error);
  }
});

export const login = createAsyncThunk("auth/login", async (user,thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
    const msgError = error.response.data.message
    return thunkAPI.rejectWithValue(msgError)
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    console.log("authslice");
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export const confirmUser = createAsyncThunk('auth/confirm', async (email) => {
  try {
    return await authService.confirmUser(email);
  } catch (error) {
    console.error(error);
  }
})
export const getUserById = createAsyncThunk('auth/getUserById', async () => {
  try {
    return await authService.getUserById();
  } catch (error) {
    console.error(error);
  }
});

export const getLoggedUser = createAsyncThunk('auth/getLoggedUser', async () => {
  try {
    return await authService.getLoggedUser()
  } catch (error) {
    console.error(error);
  }
});

export const follow = createAsyncThunk('auth/follow', async(_id) => {
  try {
    return await authService.follow(_id)
  } catch (error) {
    console.error(error);
  }
});

export const unFollow = createAsyncThunk('auth/unfollow', async (_id) => {
  try {
    return await authService.unFollow(_id)
  } catch (error) {
    console.error(error);
  }
});

export const getUserByName = createAsyncThunk('auth/getUserByName', async (name) => {
  try {
    return await authService.getUserByName(name)
  } catch (error) {
    console.error(error);
  }
})



export const { reset } = authSlice.actions;