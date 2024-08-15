import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'
import { PageSEO } from '@src/components/analytics/SEO'
import siteMetadata from '@src/config/siteMetadata'

import Gallery from 'react-photo-gallery'
import { photoGalleryData } from '@src/core/data/photo-gallery-data'
import AlbumCommonHeader from '@src/template/AlbumPage/AlbumCommonHeader'

const AlbumPage: NextPage = () => {
  const [mounted, setMounted] = React.useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  //  need to add custom Photo Component to Gallery Component
  return (
    <PageLayout fixedHeight headerContent={<AlbumCommonHeader />}>
      <PageSEO title={siteMetadata.title + ' Album Page'} description={'album page'} />
      <div className="w-full h-full overflow-scroll py-5">
        {mounted && <Gallery photos={photoGalleryData} />}
      </div>
    </PageLayout>
  )
}

export default AlbumPage
