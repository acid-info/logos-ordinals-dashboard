import styled from '@emotion/styled'
import React from 'react'

interface LeaderboardTabsProps {}

const LeaderboardTabs: React.FC<LeaderboardTabsProps> = () => {
  return (
    <TabsWrapper>
      <TabButton className="active">Individual</TabButton>
      <TabButton>Archetypes</TabButton>
    </TabsWrapper>
  )
}

const TabsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 32px;
  width: 100%;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`

const TabButton = styled.button`
  color: rgb(var(--lsd-text-primary));
  background: none;
  border: none;
  text-align: left;
  font-size: 32px;
  line-height: 40px;
  padding: 0;

  cursor: pointer;
`

export default LeaderboardTabs
