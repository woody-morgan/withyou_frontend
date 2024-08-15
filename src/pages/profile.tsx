import { PageSEO } from '@src/components/analytics/SEO';
import { PageLayout } from '@src/components/layout';
import ProfileIntroSection from '@src/components/template/ProfilePage/ProfileIntroSection';
import ProfileOptionItemsSection from '@src/components/template/ProfilePage/ProfileOptionItemsSection';
import siteMetadata from '@src/core/config/siteMetadata';
import { NextPage } from 'next';
import React from 'react';

const ProfilePage: NextPage = () => {
  return (
    <PageLayout fixedHeight>
      <PageSEO title={siteMetadata.title + ' Profile'} description={'profile page'} />
      <div className="w-full h-full">
        <ProfileIntroSection />
        <ProfileOptionItemsSection />
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
