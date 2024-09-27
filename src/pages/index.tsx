import { SEO } from '@/components/SEO'
import ExploreContainer from '@/containers/Explore/ExploreContainer'
import ExploreLayout from '@/layouts/ExploreLayout/Explore.layout'

export default function HomePage() {
  return (
    <>
      <SEO />
      <ExploreContainer />
    </>
  )
}

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <ExploreLayout>{page}</ExploreLayout>
}
