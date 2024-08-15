import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthInfoType } from '@src/core/types/auth-type';

export const authInitialState: UserAuthInfoType = {
  userId: null,
  userName: null,
  userProfile: null,
  userType: null,
  isNew: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Omit<UserAuthInfoType, 'isLogin'>>) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userProfile = action.payload.userProfile;
      state.userType = action.payload.userType;
      state.isNew = action.payload.isNew;
      state.isLogin = true;
    },
    clearUserInfo: (state) => {
      state.userId = null;
      state.userName = null;
      state.userProfile = null;
      state.userType = null;
      state.isNew = null;
      state.isLogin = false;
    },
  },
});

// Create Action
export const { setUserInfo, clearUserInfo } = authSlice.actions;
// Reducer
export default authSlice.reducer;
