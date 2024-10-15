import { SEO } from '@/components/SEO'
import DocsContainer from '@/containers/Docs/DocsContainer'

type PageProps = {}

export default function DocsPage(props: PageProps) {
  return (
    <>
      <SEO pagePath="/docs" />
      <DocsContainer />
    </>
  )
}
