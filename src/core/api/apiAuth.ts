import { getAuthToken, setClientAuthToken } from '@src/utils/authUtil'
import axios from 'axios'

// Todo communicate with validate api
export const apiValidate = async () => {
  const token = getAuthToken()
  if (!token) {
    throw new Error('No token')
  }

  // Todo remove this code
  throw new Error('Invalid token')

  try {
    await axios.get('/auth/validate')
  } catch {
    throw new Error('Invalid token')
  }
}

export const apiGetTokenByKakaoLogin = async ({ accessToken }: { accessToken: string }) => {
  try {
    const { data } = await axios.post('/auth/kakao/callback', {
      accessToken,
    })
    setClientAuthToken(data.accessToken)
    return data
  } catch (e) {
    throw e
  }
}
