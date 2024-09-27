import { SEO } from '@/components/SEO'
import { OperatorContainer } from '@/containers/Operator'
import { OperatorInfoLayout } from '@/layouts/OperatorInfoLayout'
import operators from '../../../data/operators.json'
import { getAllIds } from '../../../utils/operators'

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

  // get operators id from data
  const operatorIds = getAllIds(operators as any)

  // create paths with operator id
  operatorIds.forEach((id: any) => {
    paths.push({
      params: {
        id: id.toString(),
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
        id: [],
      },
    }
  }
}

export default Page
