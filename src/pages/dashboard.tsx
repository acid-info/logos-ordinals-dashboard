import { SEO } from '@/components/SEO'
import { DashboardContainer } from '@/containers/Dashboard'
import { DashboardLayout } from '@/layouts/DashboardLayout'

type PageProps = {}

export default function DashboardPage(props: PageProps) {
  return (
    <>
      <SEO pagePath="/explore" />
      <DashboardContainer />
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: React.ReactNode) {
  return <DashboardLayout>{page}</DashboardLayout>
}
