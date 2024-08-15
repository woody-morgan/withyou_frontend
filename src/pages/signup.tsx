import { PageSEO } from '@src/components/analytics/SEO'
import { PageLayout } from '@src/components/layout'
import siteMetadata from '@src/config/siteMetadata'
import SignupForm from '@src/template/SignupPage/SignupForm'
import SignupLetters from '@src/template/SignupPage/SignupLetters'
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
