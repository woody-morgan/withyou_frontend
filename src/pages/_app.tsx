import '@src/styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { CommonLayout } from '@src/components/layout'
import axios from 'axios'
import qs from 'qs'
import { AnimatePresence } from 'framer-motion'
import { wrapper } from '@src/store'
import Head from 'next/head'
import Analytics from '@src/components/analytics'

axios.defaults.withCredentials = process.env.NODE_ENV === 'production'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  // const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <Analytics />
      <CommonLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </CommonLayout>
    </>
  )
}

export default wrapper.withRedux(App)
