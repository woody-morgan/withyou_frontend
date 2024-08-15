import '@src/styles/globals.css'
import qs from 'qs'
import axios from 'axios'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  return <Component {...pageProps} key={router.route} />
}

export default App
