import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostInfoType, PostsInfoType } from '@src/core/types/posts-type';

export const postsInitialState: PostsInfoType = {
  posts: [],
};

const authSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    addPosts: (state, action: PayloadAction<PostsInfoType>) => {
      state.posts = action.payload.posts;
    },
    addPost: (state, action: PayloadAction<PostInfoType>) => {
      state.posts.push(action.payload);
    },
  },
});

// Create Action
export const { addPosts, addPost } = authSlice.actions;
// Reducer
export default authSlice.reducer;
