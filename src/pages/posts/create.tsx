import React from 'react'
import { PageLayout } from '@src/components/layout'
import { PageSEO } from '@src/components/analytics/SEO'
import siteMetadata from '@src/config/siteMetadata'

import PostsCreateHeader from '@src/template/PostsPage/PostsCreateHeader'
import { NoteEditor } from '@src/components/common'

const PostsCreatePage = () => {
  return (
    <PageLayout headerContent={<PostsCreateHeader />}>
      <PageSEO
        title={siteMetadata.title + ' Post Create page'}
        description={'create your baby logs'}
      />
      <div className="w-full h-full">
        <NoteEditor />
      </div>
    </PageLayout>
  )
}

export default PostsCreatePage
