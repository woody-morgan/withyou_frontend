import { PageSEO } from '@src/components/analytics/SEO'
import { FullScreenCamera } from '@src/components/common'
import { PageLayout } from '@src/components/layout'
import siteMetadata from '@src/config/siteMetadata'
import { NextPage } from 'next'
import React from 'react'

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
