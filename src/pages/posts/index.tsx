import React from 'react'
import { PageLayout } from '@src/components/layout'
import { PageSEO } from '@src/components/analytics/SEO'
import siteMetadata from '@src/config/siteMetadata'
import cx from 'classnames'

import PostsMainSection from '@src/template/PostsPage/PostsMainSection'
import PostsStartSection from '@src/template/PostsPage/PostsStartSection'
import PostsCommonHeader from '@src/template/PostsPage/PostsCommonHeader'

const PostsIndexPage = () => {
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

export default PostsIndexPage
