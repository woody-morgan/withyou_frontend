import { apiGetKakaoToken } from '@src/core/api/apiAuth'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export type KakaoLoginPageProps = {
  code: string
}

export const getServerSideProps = async (ctx) => {
  const { code } = ctx.query
  return {
    props: {
      code,
    },
  }
}

const KakaoCallbackPage: NextPage<KakaoLoginPageProps> = ({ code }) => {
  const router = useRouter()
  useEffect(() => {
    try {
      apiGetKakaoToken(code)
      // Todo: need to set user data on redux store
      router.push('/')
    } catch {
      router.push('/login')
    }
  }, [])

  return <></>
}

export default KakaoCallbackPage
