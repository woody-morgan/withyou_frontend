import React from 'react'
import { PageLayout } from '@src/components/layout'
import { PageSEO } from '@src/components/analytics/SEO'
import siteMetadata from '@src/config/siteMetadata'

import PostsCreateHeader from '@src/template/PostsPage/PostsCreateHeader'
import { NoteEditor } from '@src/components/common'
import useBackward from '@src/hooks/useBackward'

const PostsCreatePage = () => {
  const handleBackward = useBackward()

  return (
    <PageLayout headerContent={<PostsCreateHeader onBack={handleBackward} />}>
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
