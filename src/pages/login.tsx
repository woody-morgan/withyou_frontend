import { PageSEO } from '@src/components/analytics/SEO'
import { Icon } from '@src/components/atom'
import { SVGTypes } from '@src/components/atom/Icon/Icon'
import { PageLayout } from '@src/components/layout'
import { envConfig } from '@src/core/config/envConfig'
import siteMetadata from '@src/core/config/siteMetadata'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { useMemo } from 'react'

const LoginPage: NextPage = () => {
  const socialButtonName: {
    name: SVGTypes
    redirectUri: string
  }[] = useMemo(
    () => [
      {
        name: 'google',
        redirectUri: '',
      },
      {
        name: 'apple',
        redirectUri: '',
      },
      {
        name: 'kakao',
        redirectUri: envConfig.kakaoLoginUri,
      },
    ],
    []
  )

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
          {socialButtonName.map(({ name, redirectUri }) => (
            <Link key={`social-login-button-${name}`} href={redirectUri}>
              <a className="m-4 p-4 border-2 rounded-xl border-primary-700">
                <Icon size={40} name={name} />
              </a>
            </Link>
          ))}
        </div>
        <div />
      </div>
    </PageLayout>
  )
}

export default LoginPage
