import { popHistory } from '@src/store/modules/history'
import { useRouter } from 'next/router'
import { useRootDispatch, useRootState } from '@src/hooks'

export default function useBackward() {
  const router = useRouter()
  const history = useRootState((state) => state.history)
  const dispatch = useRootDispatch()

  const handleBackward = async () => {
    if (history.length > 1) {
      const prevHistory = history[history.length - 2]
      await dispatch(popHistory())
      await router.push(prevHistory)
    } else {
      await dispatch(popHistory())
      await router.push('/posts')
    }
  }

  return handleBackward
}
