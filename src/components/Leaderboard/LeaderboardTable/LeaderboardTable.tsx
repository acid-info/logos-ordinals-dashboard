import styled from '@emotion/styled'
import React from 'react'

interface LeaderboardTableProps {}

const leaderboardData = [
  { rank: 1, name: 'asockpuppet', points: 10456 },
  { rank: 2, name: 'craptastic', points: 15025 },
  { rank: 3, name: 'Waledia', points: 8987 },
  { rank: 4, name: 'FlatenEarth', points: 15025 },
  { rank: 5, name: 'Abiaand', points: 8987 },
  { rank: 6, name: '[Anonymous]', points: 7954 },
  { rank: 7, name: 'Freraand', points: 7954 },
  { rank: 8, name: 'Kiliwen', points: 7954 },
  { rank: 9, name: '[Anonymous]', points: 7954 },
  { rank: 10, name: 'Kaalelith', points: 4954 },
]

const LeaderboardTable: React.FC<LeaderboardTableProps> = () => {
  return (
    <TableWrapper>
      <TableColumn>
        <TableList>
          <TableRow className="highlight">
            <RankInfo>
              <Rank>2556.</Rank>
              <Name>Raging Bull</Name>
              <YouLabel>[you]</YouLabel>
            </RankInfo>
            <Points>4,278</Points>
          </TableRow>
          {leaderboardData.map((item) => (
            <TableRow key={item.rank}>
              <RankInfo>
                <Rank>{item.rank}.</Rank>
                <Name>{item.name}</Name>
              </RankInfo>
              <Points>{item.points.toLocaleString()}</Points>
            </TableRow>
          ))}
        </TableList>
      </TableColumn>
      <TableColumn>
        <ComingSoonWrapper>
          <ComingSoonText>Coming Soon</ComingSoonText>
        </ComingSoonWrapper>
      </TableColumn>
    </TableWrapper>
  )
}

const TableWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 32px;
  width: 100%;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`

const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const TableList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-weight: 400;
`

const TableRow = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-900);
  padding: 8px;
  margin-bottom: 2px;

  &.highlight {
    background-color: var(--dark-orange);
    color: var(--orange);
  }
`

const RankInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
`

const Rank = styled.span`
  width: 44px;
`

const Name = styled.span``

const YouLabel = styled.span`
  opacity: 0.5;
`

const Points = styled.div`
  background-color: var(--grey-800);
  font-size: 12px;
  padding: 10px 16px;
  width: 104px;
  text-align: center;
`

const ComingSoonWrapper = styled.div`
  background-color: var(--grey-900);
  display: flex;
  align-items: center;
  min-height: 52px;
  padding: 16px 8px;
`

const ComingSoonText = styled.span`
  opacity: 0.6;
  font-size: 14px;
  line-height: 20px;
`

export default LeaderboardTable
