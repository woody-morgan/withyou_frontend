import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageTransType } from '@src/core/types/page-trans'

export type HistoryInputType = {
  history: string
  transDirection?: PageTransType
}

export type HistoryInitialType = {
  logs: string[]
  transDirection: PageTransType
}

export const initialState = {
  logs: [],
  transDirection: 'forward',
}

// reduceres is wrapped with immer, so don't need to think about immutability
const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<HistoryInputType>) => {
      state.transDirection = action.payload.transDirection || state.transDirection
      if (state.logs.length == 0) {
        state.logs.push(action.payload.history)
        return
      }
      if (state.logs[state.logs.length - 1] !== action.payload.history) {
        state.logs.push(action.payload.history)
        return
      }
    },
    // when pop action conducted, it is going to the previous page
    popHistory: (state) => {
      state.transDirection = 'back'
      if (state.logs.length == 0) {
        return
      }
      state.logs.pop()
    },
    clearHistory: (state) => {
      state.logs = []
    },
    modTransDirection: (state, action: PayloadAction<PageTransType>) => {
      state.transDirection = action.payload
    },
  },
})

export const { addHistory, popHistory, clearHistory, modTransDirection } = historySlice.actions

export default historySlice.reducer
