import { PageSEO } from '@src/components/analytics/SEO'
import { PageLayout } from '@src/components/layout'
import siteMetadata from '@src/config/siteMetadata'
import PostsCommonHeader from '@src/template/PostsPage/PostsCommonHeader'
import PostsMainSection from '@src/template/PostsPage/PostsMainSection'
import PostsStartSection from '@src/template/PostsPage/PostsStartSection'
import cx from 'classnames'
import React from 'react'

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
