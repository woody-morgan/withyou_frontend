import '@src/styles/globals.css'
import qs from 'qs'
import axios from 'axios'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { CommonLayout } from '@src/components/layout'
import { useState } from 'react'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  // const [isLoading, setIsLoading] = useState(true)
  const [headerFixed, setHeaderFixed] = useState(true)

  return (
    <CommonLayout headerFixed={headerFixed}>
      <Component {...pageProps} key={router.route} setHeaderFixed={setHeaderFixed} />
    </CommonLayout>
  )
}

export default App
