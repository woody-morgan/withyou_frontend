import '@src/styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { CommonLayout } from '@src/components/layout'
import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = process.env.NODE_ENV === 'production'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  // const [isLoading, setIsLoading] = useState(true)

  return (
    <CommonLayout>
      <Component {...pageProps} key={router.route} />
    </CommonLayout>
  )
}

export default App
