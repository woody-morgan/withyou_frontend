import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageTransType } from '@src/core/types/page-trans'

export type HistoryInputType = {
  history: string
  transDirection?: PageTransType
}

export type HistoryInitialType = {
  history: string[]
  transDirection: PageTransType
}

export const initialState = {
  history: [],
  transDirection: 'forward',
}

// reduceres is wrapped with immer, so don't need to think about immutability
const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<HistoryInputType>) => {
      state.transDirection = action.payload.transDirection || state.transDirection
      if (state.history.length == 0) {
        state.history.push(action.payload.history)
        return
      }
      if (state.history[state.history.length - 1] !== action.payload.history) {
        state.history.push(action.payload.history)
        return
      }
    },
    // when pop action conducted, it is going to the previous page
    popHistory: (state) => {
      if (state.history[state.history.length - 1] === undefined) {
        return
      }
      state.history.pop()
      state.transDirection = 'back'
    },
    clearHistory: (state) => {
      state.history = []
    },
  },
})

export const { addHistory, popHistory, clearHistory } = historySlice.actions

export default historySlice.reducer
