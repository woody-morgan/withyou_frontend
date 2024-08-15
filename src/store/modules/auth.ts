import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthInfoType } from '@src/core/types/auth-type';

export const authInitialState: UserAuthInfoType = {
  id: null,
  familyId: null,
  gender: null,
  nickname: null,
  role: null,
  roles: null,
  thumbnail: null,
  vendor: null,
  isNew: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Omit<UserAuthInfoType, 'isLogin'>>) => {
      state.id = action.payload.id;
      state.familyId = action.payload.familyId;
      state.gender = action.payload.gender;
      state.nickname = action.payload.nickname;
      state.role = action.payload.role;
      state.roles = action.payload.roles;
      state.thumbnail = action.payload.thumbnail;
      state.vendor = action.payload.vendor;
      state.isNew = action.payload.isNew;
      state.isLogin = true;
    },
    clearUserInfo: (state) => {
      state.id = null;
      state.familyId = null;
      state.gender = null;
      state.nickname = null;
      state.role = null;
      state.roles = null;
      state.thumbnail = null;
      state.vendor = null;
      state.isNew = null;
      state.isLogin = false;
    },
  },
});

// Create Action
export const { setUserInfo, clearUserInfo } = authSlice.actions;
// Reducer
export default authSlice.reducer;
