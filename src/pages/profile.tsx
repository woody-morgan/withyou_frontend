import React from 'react'
import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'
import { PageSEO } from '@src/components/analytics/SEO'
import siteMetadata from '@src/config/siteMetadata'
import ProfileIntroSection from '@src/template/ProfilePage/ProfileIntroSection'
import ProfileOptionItemsSection from '@src/template/ProfilePage/ProfileOptionItemsSection'

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
