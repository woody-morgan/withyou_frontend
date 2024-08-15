import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthInfoType } from '@src/core/types/auth-type';

export const authInitialState: UserAuthInfoType = {
  user: {
    id: null,
    familyId: null,
    gender: null,
    nickname: null,
    role: null,
    roles: null,
    thumbnail: null,
    vendor: null,
    isNew: null,
  },
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Omit<UserAuthInfoType, 'isLogin'>>) => {
      state.user = action.payload.user;
      state.isLogin = true;
    },
    clearUserInfo: (state) => {
      state.user = authInitialState.user;
      state.isLogin = false;
    },
  },
});

// Create Action
export const { setUserInfo, clearUserInfo } = authSlice.actions;
// Reducer
export default authSlice.reducer;
