import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { apiValidate } from '@src/core/api/apiAuth'

export default function useValidateUser() {
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      try {
        await apiValidate()
      } catch (error) {
        //  need to show toast or alert or anything to user
        await router.push('/login')
      }
    }

    checkAuth()
  }, [])
}
