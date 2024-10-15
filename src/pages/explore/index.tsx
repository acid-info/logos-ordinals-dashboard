import { SEO } from '@/components/SEO'
import ExploreContainer from '@/containers/Explore/ExploreContainer'
import ExploreLayout from '@/layouts/ExploreLayout/Explore.layout'

type PageProps = {}

export default function ExplorePage(props: PageProps) {
  return (
    <>
      <SEO pagePath="/explore" />
      <ExploreContainer />
    </>
  )
}

ExplorePage.getLayout = function getLayout(page: React.ReactNode) {
  return <ExploreLayout>{page}</ExploreLayout>
}
