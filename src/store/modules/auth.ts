import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserAuthInfoType } from '@src/core/types/auth-type'

export const initialState: UserAuthInfoType = {
  id: null,
  name: null,
  email: null,
  phone: null,
  profileImage: null,
  isLogin: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserAuthInfoType>) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.profileImage = action.payload.profileImage
      state.isLogin = true
    },
    clearUserInfo: (state) => {
      state.id = null
      state.name = null
      state.email = null
      state.phone = null
      state.profileImage = null
      state.isLogin = false
    },
  },
})

// Create Action
export const { setUserInfo, clearUserInfo } = authSlice.actions
// Reducer
export default authSlice.reducer
