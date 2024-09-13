import styled from '@emotion/styled'
import React from 'react'

const WelcomeSection: React.FC = () => {
  return (
    <WelcomeWrapper>
      <Title>Welcome, Operator!</Title>
      <Description>
        The Logos Operator collection consists of 5,000 Ordinals, each
        representing one of ten distinct archetypes within the Logos network.
      </Description>
      <ConnectButton>Connect Wallet</ConnectButton>
    </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.section`
  display: flex;
  width: 480px;
  max-width: 100%;
  flex-direction: column;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Title = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  margin: 0;
`

const Description = styled.p`
  line-height: 20px;
  margin-top: 32px;
`

const ConnectButton = styled.button`
  align-self: center;
  border: 1px solid rgb(var(--lsd-border-primary));
  color: rgb(var(--lsd-text-primary));
  margin-top: 32px;
  padding: 10px 40px;
  background: transparent;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 10px 20px;
  }
`

export default WelcomeSection
