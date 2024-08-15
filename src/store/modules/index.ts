import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { UserAuthInfoType } from '@src/core/types/auth-type';
import { LayoutInfoType } from '@src/core/types/layout-type';
import { ModalInfoType } from '@src/core/types/modal-type';
import { PostsInfoType } from '@src/core/types/posts-type';
import { HYDRATE } from 'next-redux-wrapper';

import auth from './auth';
import layout from './layout';
import modal from './modal';
import posts from './posts';

export type RootStateType = CombinedState<{
  auth: UserAuthInfoType;
  modal: ModalInfoType;
  layout: LayoutInfoType;
  posts: PostsInfoType;
}>;
export type RootDispatchType = ReturnType<typeof reducer>['dispatch'];

const reducer = (state: RootStateType, action: AnyAction) => {
  // connect ssr with csr
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    layout,
    auth,
    modal,
    posts,
  })(state, action);
};

export default reducer;
