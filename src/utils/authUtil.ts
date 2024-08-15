// check cookies, axios header
import Cookies from 'js-cookie'
import axios from 'axios'

export const setAuthToken = (token: string) => {
  Cookies.set('jwt', token)
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const getAuthToken = (): string => {
  const token = Cookies.get('jwt') || axios.defaults.headers.common['Authorization'] || ''
  return token
}
