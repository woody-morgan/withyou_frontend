import '@src/styles/globals.css'

import Analytics from '@src/components/analytics'
import { CommonLayout } from '@src/components/layout'
import { envConfig } from '@src/core/config/envConfig'
import siteMetadata from '@src/core/config/siteMetadata'
import { wrapper } from '@src/store'
import { getAuthToken } from '@src/utils/authUtil'
import axios from 'axios'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import qs from 'qs'
import { ToastContainer } from 'react-toastify'

axios.defaults.withCredentials = true
axios.defaults.baseURL = envConfig.apiUrl
axios.defaults.headers.common['Authorization'] = getAuthToken()
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <CommonLayout>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </CommonLayout>
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
