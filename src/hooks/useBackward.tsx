import { useRootDispatch, useRootState } from '@src/hooks'
import { popHistory } from '@src/store/modules/history'
import { useRouter } from 'next/router'

export default function useBackward(to: string) {
  const router = useRouter()
  const history = useRootState((state) => state.history)
  const dispatch = useRootDispatch()

  // last history is last page
  const handleBackward = async () => {
    if (history.logs.length > 0) {
      const prevHistory = history.logs[history.logs.length - 1]
      await dispatch(popHistory())
      await router.push(prevHistory)
    } else {
      console.log(history.logs)
      await dispatch(popHistory())
      await router.push(to)
    }
  }

  return handleBackward
}
