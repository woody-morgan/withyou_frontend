import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'
import siteMetadata from '@src/config/siteMetadata'
import { PageSEO } from '@src/components/analytics/SEO'

const HomePage: NextPage<{
  setHeaderFixed: (headerFixed: boolean) => void
}> = ({ setHeaderFixed }) => {
  return (
    <PageLayout fixedHeight>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="h-full flex flex-col justify-between">
        <div>is tailwindcss working?</div>
        <div>is bottom ?</div>
      </div>
    </PageLayout>
  )
}

export default HomePage
