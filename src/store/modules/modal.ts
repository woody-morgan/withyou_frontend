import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalInfoType } from '@src/core/types/modal-type';

// fullscreen modal -> because our app is mobile first
export const modalInitialState: ModalInfoType = {
  type: null,
  title: null,
  fullScreen: true,
  option: null,
};

// Todo: add function representative reducers
const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalInfoType>) => {
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.fullScreen = action.payload.fullScreen;
      state.option = action.payload.option;
    },
    openPostCreateModal: (state, action: PayloadAction<Pick<ModalInfoType, 'fullScreen'>>) => {
      state.type = 'POSTCREATE';
      state.title = 'Create Room';
      state.fullScreen = action.payload.fullScreen;
      state.option = null;
    },
    closeModal: (state) => {
      state.type = null;
      state.title = null;
      state.fullScreen = true;
      state.option = null;
    },
  },
});

// Create Action
export const { openModal, openPostCreateModal, closeModal } = modalSlice.actions;
// Reducer
export default modalSlice.reducer;
