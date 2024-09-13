import { LeaderboardTable } from '@/components/Leaderboard/LeaderboardTable'
import { LeaderboardTabs } from '@/components/Leaderboard/LeaderboardTabs'
import styled from '@emotion/styled'
import React from 'react'

interface LeaderboardProps {}

const LeaderboardContainer: React.FC<LeaderboardProps> = () => {
  return (
    <Container>
      <LeaderboardTabs />
      <LeaderboardTable />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`

export default LeaderboardContainer
