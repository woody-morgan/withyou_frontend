import { getAuthToken } from '@src/utils/authUtil'
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

export const apiKakaoLogin = async () => {
  try {
    await axios.get('/auth/kakao/login')
  } catch (err) {
    alert(err.message)
  }
}
