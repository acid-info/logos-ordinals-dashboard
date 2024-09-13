import { LeaderboardTable } from '@/components/Leaderboard/LeaderboardTable'
import { LeaderboardTabs } from '@/components/Leaderboard/LeaderboardTabs'
import styled from '@emotion/styled'
import React from 'react'

interface LeaderboardProps {}

const Leaderboard: React.FC<LeaderboardProps> = () => {
  return (
    <Container>
      <LeaderboardTabs />
      <LeaderboardTable />
    </Container>
  )
}

const Container = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 28px 32px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`

export default Leaderboard
