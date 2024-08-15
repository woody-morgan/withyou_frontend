import React from 'react'
import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'
import { PageSEO } from '@src/components/analytics/SEO'
import siteMetadata from '@src/config/siteMetadata'
import SignupLetters from '@src/template/SignupPage/SignupLetters'
import SignupForm from '@src/template/SignupPage/SignupForm'

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
