import { SEO } from '@/components/SEO'
import { HomeContainer } from '@/containers/Home'
import { HomeLayout } from '@/layouts/HomeLayout'

export default function HomePage() {
  return (
    <>
      <SEO />
      <HomeContainer />
    </>
  )
}

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
