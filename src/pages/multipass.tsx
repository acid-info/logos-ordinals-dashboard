import { SEO } from '@/components/SEO'
import MultipassContainer from '@/containers/Multipass/MultipassContainer'

type PageProps = {}

export default function MultipassPage(props: PageProps) {
  return (
    <>
      <SEO pagePath="/multipass" />
      <MultipassContainer />
    </>
  )
}
