import { envConfig } from '@src/core/config/envConfig'
import { getAuthToken, setClientAuthToken } from '@src/utils/authUtil'
import axios from 'axios'
import qs from 'qs'

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

export const apiGetKakaoToken = async (code: string) => {
  const payload = qs.stringify({
    grant_type: 'authorization_code',
    client_id: envConfig.kakaoLoginKey,
    redirect_uri: envConfig.kakaoLoginRedirectUri,
    code,
  })
  try {
    const res = await axios.post('https://kauth.kakao.com/oauth/token', payload)
    const { access_token, refresh_token } = res.data
    const { data } = await axios.post('/auth/kakao/callback', { access_token, refresh_token })
    setClientAuthToken(data.access_token)
    return data
  } catch (e) {
    throw e
  }
}
