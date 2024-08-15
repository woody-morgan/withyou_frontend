import { PageSEO } from '@src/components/analytics/SEO'
import { IconButton } from '@src/components/common'
import { SVGTypes } from '@src/components/common/Icon/Icon'
import { PageLayout } from '@src/components/layout'
import siteMetadata from '@src/config/siteMetadata'
import { NextPage } from 'next'
import React, { useMemo } from 'react'

const LoginPage: NextPage = () => {
  const socialButtonName: Partial<SVGTypes[]> = useMemo(() => ['google', 'apple', 'kakao'], [])

  const handleLogin = (name) => {
    console.log(name)
  }

  return (
    <PageLayout fixedHeight>
      <PageSEO title={siteMetadata.title + ' Login Page'} description={'login page'} />
      <div className="w-full h-full flex flex-col justify-center space-y-20">
        <div className="text-center space-y-1">
          <h1>Login</h1>
          <p>
            Join <strong>{process.env.NEXT_PUBLIC_APP_NAME}</strong>
          </p>
        </div>
        <div className="inline-flex justify-center w-80 m-center flex-wrap basis-1/9">
          {socialButtonName.map((name) => (
            <IconButton
              key={`social-login-button-${name}`}
              classNames="m-4 p-4 border-2 rounded-xl border-primary-700"
              size={40}
              name={name}
              onClick={() => handleLogin(name)}
            />
          ))}
        </div>
        <div />
      </div>
    </PageLayout>
  )
}

export default LoginPage
