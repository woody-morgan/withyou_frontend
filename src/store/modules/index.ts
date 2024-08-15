import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import history, { HistoryInitialType } from './history'

const reducer = (state: CombinedState<{ history: HistoryInitialType }>, action: AnyAction) => {
  // connect ssr with csr
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return combineReducers({
    history,
  })(state, action)
}

export default reducer
