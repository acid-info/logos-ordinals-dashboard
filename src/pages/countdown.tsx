import { SEO } from '@/components/SEO'
import { CountdownContainer } from '@/containers/Countdown'
import { CountdownLayout } from '@/layouts/CountdownLayout'

type PageProps = {}

export default function CountdownPage(props: PageProps) {
  return (
    <>
      <SEO pagePath="/docs" />
      <CountdownContainer />
    </>
  )
}

CountdownPage.getLayout = function getLayout(page: React.ReactNode) {
  return <CountdownLayout>{page}</CountdownLayout>
}
