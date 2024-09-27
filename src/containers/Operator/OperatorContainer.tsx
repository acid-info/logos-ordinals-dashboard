import { OperatorDetails } from '@/components/Operator/OperatorDetails'
// import { SimilarOperators } from '@/components/Operator/SimilarOperators'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'

interface ExploreOperatorProps {
  id: string
}

const ExploreOperator: React.FC<ExploreOperatorProps> = ({ id }) => {
  const router = useRouter()

  const handleGoBack = () => {
    // if router has history, go back, else go to home
    if (router?.back) {
      router.back()
    } else {
      router.push('/')
    }
  }
  return (
    <Container>
      <GoBackButton aria-label="Share" onClick={handleGoBack}>
        <img src={`/assets/chevron-left.svg`} alt="Share icon" />
      </GoBackButton>
      <OperatorDetails id={Number(id)} />
      {/* <SimilarOperators /> */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(var(--lsd-border-primary));
  background: transparent;
  margin-bottom: 16px;
  cursor: pointer;
`

export default ExploreOperator
