import reducer from '@src/store/modules'
import { useDispatch, useSelector } from 'react-redux'

const rootReducer = reducer
export type RootState = ReturnType<typeof rootReducer>

type StateSelector<T> = (state: RootState) => T
type EqualityFn<T> = (left: T, right: T) => boolean

// Typed Selector Hook
export function useRootState<T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) {
  return useSelector(selector, equalityFn)
}

// Typed Dispatch Hook
export const useRootDispatch = () => useDispatch<RootState>()
