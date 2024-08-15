import { PageSEO } from '@src/components/analytics/SEO'
import { PageLayout } from '@src/components/layout'
import PostsCommonHeader from '@src/components/template/PostsPage/PostsCommonHeader'
import PostsMainSection from '@src/components/template/PostsPage/PostsMainSection'
import PostsStartSection from '@src/components/template/PostsPage/PostsStartSection'
import siteMetadata from '@src/core/config/siteMetadata'
import cx from 'classnames'
import React from 'react'

const HomePage = () => {
  return (
    <PageLayout fixedHeight headerContent={<PostsCommonHeader />}>
      <PageSEO title={siteMetadata.title + ' Post page'} description={'create your baby logs'} />
      <div className={cx('h-full', 'flex flex-col items-center')}>
        <PostsMainSection />
        <PostsStartSection />
      </div>
    </PageLayout>
  )
}

export default HomePage
