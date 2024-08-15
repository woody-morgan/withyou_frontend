import { PageSEO } from '@src/components/analytics/SEO'
import { PageLayout } from '@src/components/layout'
import HomeMainContent from '@src/components/template/HomePage/HomeMainContent'
import HomeStartSection from '@src/components/template/HomePage/HomeStartSection'
import siteMetadata from '@src/core/config/siteMetadata'
import cx from 'classnames'
import { NextPage } from 'next'

export function getServerSideProps(ctx) {
  return {
    props: {
      // props to be passed to the page component
    },
  }
}

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
