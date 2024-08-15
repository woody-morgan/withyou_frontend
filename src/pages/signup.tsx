import { PageSEO } from '@src/components/analytics/SEO'
import { PageLayout } from '@src/components/layout'
import SignupForm from '@src/components/template/SignupPage/SignupForm'
import SignupLetters from '@src/components/template/SignupPage/SignupLetters'
import siteMetadata from '@src/core/config/siteMetadata'
import { NextPage } from 'next'
import React from 'react'

const SignupPage: NextPage = () => {
  return (
    <PageLayout fixedHeight>
      <PageSEO title={siteMetadata.title + ' Sign up Page'} description={'Sign up page'} />
      <div className="w-full h-full flex flex-col justify-evenly">
        <SignupLetters />
        <SignupForm />
      </div>
    </PageLayout>
  )
}

export default SignupPage
