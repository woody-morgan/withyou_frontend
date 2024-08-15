import React from 'react'
import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'
import { PageSEO } from '@src/components/analytics/SEO'
import siteMetadata from '@src/config/siteMetadata'
import { FullScreenCamera } from '@src/components/common'

const CameraPage: NextPage = () => {
  return (
    <PageLayout fixedHeight fullWidth>
      <PageSEO title={siteMetadata.title + ' Camera Page'} description={'camera page'} />
      <div className="w-full h-full">
        <FullScreenCamera />
      </div>
    </PageLayout>
  )
}

export default CameraPage
