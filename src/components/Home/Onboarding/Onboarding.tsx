import styled from '@emotion/styled'
import React from 'react'
import { OperatorGallery } from '../OperatorGallery'
import { WelcomeSection } from '../WelcomeSection'

const Onboarding: React.FC = () => {
  return (
    <Container>
      <WelcomeSection />
      <OperatorGallery />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  margin-top: 12vh;

  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export default Onboarding
