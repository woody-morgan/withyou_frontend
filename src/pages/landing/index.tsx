import { PageSEO } from '@src/components/analytics/SEO'
import { PageLayout } from '@src/components/layout'
import LandingPageMainContent from '@src/components/template/HomePage/HomeMainContent'
import LandingPageStartSection from '@src/components/template/HomePage/HomeStartSection'
import siteMetadata from '@src/core/config/siteMetadata'
import cx from 'classnames'
import { NextPage } from 'next'

const LandingPage: NextPage = () => {
  return (
    <PageLayout fixedHeight>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className={cx('h-full', 'flex flex-col items-center')}>
        <LandingPageMainContent />
        <LandingPageStartSection />
      </div>
    </PageLayout>
  )
}

export default LandingPage
