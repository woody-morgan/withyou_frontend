import { PageSEO } from '@src/components/analytics/SEO'
import { ImageWrapper } from '@src/components/atom'
import { PageLayout } from '@src/components/layout'
import { SignInForm } from '@src/components/molecule'
import siteMetadata from '@src/core/config/siteMetadata'
import { withStoreSSR } from '@src/hocnf'
import { useRootDispatch } from '@src/hooks'
import { hideBottomNav } from '@src/store/modules/layout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

// Todo: go back to request url
export const getServerSideProps = withStoreSSR((store) => {
  return async (ctx) => {
    const { dispatch } = store
    dispatch(hideBottomNav())
    return {
      props: {},
    }
  }
})

const LoginPage: NextPage = () => {
  const router = useRouter()
  const dispatch = useRootDispatch()

  return (
    <PageLayout fullWidth fixedHeight headerContent={<></>}>
      <PageSEO title={siteMetadata.title + ' Login Page'} description={'login page'} />
      <div className="w-full h-full flex flex-col justify-between pt-28 px-side-padding">
        <div className="text-left">
          <h1 className="font-PyeongChangPeace-Bold text-wy-blue-500">{siteMetadata.title}</h1>
          <h2>
            <div>함께 만드는</div>
            <div>우리 아이 추억</div>
          </h2>
        </div>
        <SignInForm router={router} dispatch={dispatch} />
      </div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full">
        <ImageWrapper src="/static/login_bg.png" layout="fill" priority />
      </div>
    </PageLayout>
  )
}

export default LoginPage
