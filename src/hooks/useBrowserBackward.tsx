import useBackward from '@src/hooks/useBackward'
import React, { useEffect } from 'react'

/**
 * @warn callback will be called before backward hook is called
 * @warn this hook should be used only once in the app
 * @param cb
 */
const useBrowserBackward = (cb?: () => void) => {
  const handleBackward = useBackward('/')

  const handleBackwardClick = async () => {
    if (cb) {
      cb()
    }
    await handleBackward()
  }

  useEffect(() => {
    window.addEventListener('popstate', handleBackwardClick)
    return () => {
      window.removeEventListener('popstate', handleBackwardClick)
    }
  }, [])
}

export default useBrowserBackward
