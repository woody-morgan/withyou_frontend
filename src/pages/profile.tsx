import { PageSEO } from '@src/components/analytics/SEO'
import { PageLayout } from '@src/components/layout'
import siteMetadata from '@src/config/siteMetadata'
import ProfileIntroSection from '@src/template/ProfilePage/ProfileIntroSection'
import ProfileOptionItemsSection from '@src/template/ProfilePage/ProfileOptionItemsSection'
import { NextPage } from 'next'
import React from 'react'

const ProfilePage: NextPage = () => {
  return (
    <PageLayout fixedHeight>
      <PageSEO title={siteMetadata.title + ' Profile'} description={'profile page'} />
      <div className="w-full h-full">
        <ProfileIntroSection />
        <ProfileOptionItemsSection />
      </div>
    </PageLayout>
  )
}

export default ProfilePage
