import { PageSEO } from '@src/components/analytics/SEO'
import { SVGTypes } from '@src/components/atom/Icon/Icon'
import { PageLayout } from '@src/components/layout'
import { IconButton } from '@src/components/molecule'
import { apiGetTokenByKakaoLogin } from '@src/core/api/apiAuth'
import { envConfig } from '@src/core/config/envConfig'
import siteMetadata from '@src/core/config/siteMetadata'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'

// Todo: go back to request url
export const getServerSideProps = (ctx: any) => {
  console.log(ctx)
  return {
    props: {},
  }
}

const LoginPage: NextPage = () => {
  const router = useRouter()

  const socialButtonName: SVGTypes[] = useMemo(() => ['google', 'apple', 'kakao'], [])

  const handleButtonClick = async ({ name }) => {
    if (name === 'kakao') {
      if (!Kakao.isInitialized()) {
        Kakao.init(envConfig.kakaoClientId)
      }
      Kakao.Auth.login({
        success: async function (authObj) {
          const { access_token } = authObj
          try {
            // Todo: setting userinfo on redux store
            const userData = await apiGetTokenByKakaoLogin({ accessToken: access_token })
            await router.push('/')
          } catch (e) {
            console.log(e)
          }
        },
        fail: function (err) {
          // Todo: error handling
          console.log(err)
        },
      })
    }
  }

  return (
    <PageLayout fixedHeight>
      <PageSEO title={siteMetadata.title + ' Login Page'} description={'login page'} />
      <div className="w-full h-full flex flex-col justify-center space-y-20">
        <div className="text-center space-y-1">
          <h1>Login</h1>
          <p>
            Join <strong>{envConfig.appName}</strong>
          </p>
        </div>
        <div className="inline-flex justify-center w-80 m-center flex-wrap basis-1/9">
          {socialButtonName.map((name) => (
            <IconButton
              size={40}
              name={name}
              className="m-4 p-4 border-2 rounded-xl border-primary-700"
              key={`social-login-button-${name}`}
              onClick={() => handleButtonClick({ name })}
            />
          ))}
        </div>
        <div />
      </div>
    </PageLayout>
  )
}

export default LoginPage
