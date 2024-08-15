import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { UserAuthInfoType } from '@src/core/types/auth-type'
import { HYDRATE } from 'next-redux-wrapper'

import auth from './auth'
import history, { HistoryInitialType } from './history'

export type RootStateType = CombinedState<{ history: HistoryInitialType; auth: UserAuthInfoType }>
export type RootDispatchType = ReturnType<typeof reducer>['dispatch']

const reducer = (state: RootStateType, action: AnyAction) => {
  // connect ssr with csr
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return combineReducers({
    history,
    auth,
  })(state, action)
}

export default reducer
