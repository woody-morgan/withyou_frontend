import GA from './GoogleAnalytics'
import siteMetadata from '@src/config/siteMetadata'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return <>{isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}</>
}

export default Analytics
