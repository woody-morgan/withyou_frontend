import { PageSEO } from '@src/components/analytics/SEO'
import { NoteEditor } from '@src/components/atom'
import { PageLayout } from '@src/components/layout'
import PostsCreateHeader from '@src/components/template/PostsPage/PostsCreateHeader'
import siteMetadata from '@src/core/config/siteMetadata'
import useBackward from '@src/hooks/useBackward'
import React from 'react'

const PostsCreatePage = () => {
  const handleBackward = useBackward()

  return (
    <PageLayout headerContent={<PostsCreateHeader onBack={handleBackward} />}>
      <PageSEO
        title={siteMetadata.title + ' Post Create page'}
        description={'create your baby logs'}
      />
      <div className="h-full">
        <NoteEditor />
      </div>
    </PageLayout>
  )
}

export default PostsCreatePage
