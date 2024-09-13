import { SEO } from '@/components/SEO'
import { OperatorContainer } from '@/containers/Operator'
import { OperatorInfoLayout } from '@/layouts/OperatorInfoLayout'

const Page = ({ id }: any) => {
  return (
    <>
      <SEO pagePath={`/operators/${id}`} />
      <OperatorContainer id={id} />
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <OperatorInfoLayout>{page}</OperatorInfoLayout>
}

export async function getStaticPaths() {
  const paths: any = []

  // operator id from 1 to 1000
  const operators = Array.from({ length: 1000 }, (_, i) => i + 1)

  operators.forEach((operator) => {
    paths.push({
      params: {
        id: operator.toString(),
      },
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { id } = params

  try {
    return {
      props: {
        id,
      },
    }
  } catch (error) {
    return {
      props: {
        jobs: [],
        issues: {},
      },
    }
  }
}

export default Page
