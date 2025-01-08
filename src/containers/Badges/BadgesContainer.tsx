import { OperatorPanel } from '@/components/Dashboard/OperatorPanel'
import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Badge from './Badge'
import { mock_badges } from './mockdata'

const BadgesContainer: React.FC = () => {
  const router = useRouter()
  const [showToast, setShowToast] = useState(true)

  const handleGoBack = () => {
    router.push('/')
  }

  return (
    <Container>
      <LeftColumn>
        <OperatorPanel />
      </LeftColumn>
      <RightColumn>
        {showToast && (
          <Toast>
            <p>Earn badges by completing the tasks</p>
            <button onClick={() => setShowToast(false)}>
              <div>Learn More</div>
              <span>
                <img src="/assets/close-purple.svg" alt="Close" />
              </span>
            </button>
          </Toast>
        )}
        <Header>
          <GoBackButton aria-label="Share" onClick={handleGoBack}>
            <img src={`/assets/chevron-left.svg`} alt="Share icon" />
          </GoBackButton>
          <h1>Badges</h1>
        </Header>
        <BadgeInfo>
          <InfoBox>
            <div>Earned Badges</div>
            <div>8</div>
          </InfoBox>
          <InfoBox>
            <div>Total Badges</div>
            <div>20</div>
          </InfoBox>
        </BadgeInfo>
        <BadgeGrid>
          {mock_badges.map((badge, index) => (
            <Badge key={index} src={badge.src} label={badge.label} />
          ))}
        </BadgeGrid>
      </RightColumn>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 0 16px;

  margin-top: 80px;
  width: 100%;

  @media (max-width: ${breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
  }
`

const LeftColumn = styled.section`
  grid-column: 1 / 6;

  @media (max-width: ${breakpoints.sm}px) {
    grid-column: 1 / 2;
  }
`

const RightColumn = styled.section`
  grid-column: 8 / 23;

  @media (max-width: ${breakpoints.sm}px) {
    grid-column: 1 / 2;
  }
`

const Toast = styled.div`
  display: flex;
  height: 60px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: #320430;

  p {
    color: #f29ae9;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.14px;
  }

  button {
    display: flex;
    align-items: center;
    border: 1px solid #f29ae9;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.12px;
    background: transparent;
    color: #f29ae9;
    cursor: pointer;

    div {
      width: 90px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-left: 1px solid #f29ae9;
    }
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 24px;

  h1 {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.24px;
  }
`

const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(var(--lsd-border-primary));
  background: transparent;
  cursor: pointer;
`

const BadgeInfo = styled.div`
  display: flex;
  gap: 2px;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 80px;
  background: rgba(20, 20, 20, 0.81);
  padding: 16px 8px;
  color: white;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.14px;
`

const BadgeGrid = styled.div`
  margin-top: 32px;
  display: grid;
  gap: 24px 16px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default BadgesContainer
