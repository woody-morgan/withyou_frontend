import React, { useState } from 'react'
import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'
import { PageSEO } from '@src/components/analytics/SEO'
import siteMetadata from '@src/config/siteMetadata'
import { WebCamera } from '@src/components/common'
import { useWindowResize } from '@src/hooks'
import appConfig from '@src/config/appConfig'

const CameraPage: NextPage = () => {
  const [{ width, height }, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useWindowResize(handleResize, 100)

  return (
    <PageLayout fixedHeight fullWidth>
      <PageSEO title={siteMetadata.title + ' Camera Page'} description={'camera page'} />
      <div className="w-full h-full">
        <WebCamera
          audio={false}
          height={height - appConfig.bottomNavigationHeightInt}
          width={width}
          videoConstraints={{
            facingMode: 'user',
            aspectRatio: height <= width ? width / height : height / width,
          }}
        />
      </div>
    </PageLayout>
  )
}

export default CameraPage
