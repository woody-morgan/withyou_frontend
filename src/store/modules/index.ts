import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { UserAuthInfoType } from '@src/core/types/auth-type';
import { LayoutInfoType } from '@src/core/types/layout-type';
import { HYDRATE } from 'next-redux-wrapper';

import auth from './auth';
import layout from './layout';

export type RootStateType = CombinedState<{
  auth: UserAuthInfoType;
  layout: LayoutInfoType;
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
  })(state, action);
};

export default reducer;
