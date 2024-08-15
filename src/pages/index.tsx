import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'

const HomePage: NextPage<{
  setHeaderFixed: (headerFixed: boolean) => void
}> = ({ setHeaderFixed }) => {
  return (
    <PageLayout fixedHeight>
      <div>is tailwindcss working?</div>
    </PageLayout>
  )
}

export default HomePage
