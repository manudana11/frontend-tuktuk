import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsService from "./commentService";

const initialState = {
    comments: [],
    status: 'idle',
    error: null,
};

export const createComment = createAsyncThunk('comment/createComment', async (comment, token) => {
    try {
        return await commentsService.createComment(comment, token);
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(createComment.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createComment.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.comments = action.payload;
        })
        .addCase(createComment.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export default commentSlice.reducer;