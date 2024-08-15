import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import history, { HistoryInitialType } from './history'

import auth from './auth'
import { UserAuthInfoType } from '@src/core/types/auth-type'

export type RootStateType = CombinedState<{ history: HistoryInitialType; auth: UserAuthInfoType }>

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
