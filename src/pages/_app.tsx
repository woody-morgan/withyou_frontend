import '@src/styles/globals.css'

import Analytics from '@src/components/analytics'
import { CommonLayout } from '@src/components/layout'
import { wrapper } from '@src/store'
import axios from 'axios'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import qs from 'qs'

axios.defaults.withCredentials = process.env.NODE_ENV === 'production'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  // const [isLoading, setIsLoading] = useState(true)

  //  to execute backward animation when user pressed browser back button
  // useBrowserBackward()

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
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </CommonLayout>
    </>
  )
}

export default wrapper.withRedux(App)
