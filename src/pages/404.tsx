import React from 'react'
import { PageLayout } from '@src/components/layout'
import { Button } from '@src/components/common'
import Link from 'next/link'

const FourZeroFourPage = () => {
  return (
    <PageLayout fixedHeight>
      <div className="h-full flex flex-col justify-center items-center space-y-3">
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <Link href="/">
          <Button styles="secondary">Back to Home</Button>
        </Link>
      </div>
    </PageLayout>
  )
}

export default FourZeroFourPage
