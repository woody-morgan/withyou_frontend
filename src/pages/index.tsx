import { PageSEO } from '@src/components/analytics/SEO'
import { PageLayout } from '@src/components/layout'
import siteMetadata from '@src/config/siteMetadata'
import HomeMainContent from '@src/template/HomePage/HomeMainContent'
import HomeStartSection from '@src/template/HomePage/HomeStartSection'
import cx from 'classnames'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <PageLayout fixedHeight>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className={cx('h-full', 'flex flex-col items-center')}>
        <HomeMainContent />
        <HomeStartSection />
      </div>
    </PageLayout>
  )
}

export default HomePage
