import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

interface Operator {
  id: string
  image: string
  name: string
  pointsPerHour: number
  isStaked: boolean
  isPinned: boolean
}

interface OperatorGridProps {
  isLoading: boolean
}

const operators: Operator[] = [
  {
    id: '1',
    image: '/dashboard/mock/operators/1.gif',
    name: 'OP 1',
    pointsPerHour: 304,
    isStaked: false,
    isPinned: false,
  },
  {
    id: '2',
    image: '/dashboard/mock/operators/2.gif',
    name: 'OP 2',
    pointsPerHour: 304,
    isStaked: true,
    isPinned: false,
  },
  {
    id: '3',
    image: '/dashboard/mock/operators/3.gif',
    name: 'OP 3',
    pointsPerHour: 304,
    isStaked: true,
    isPinned: true,
  },
  {
    id: '4',
    image: '/dashboard/mock/operators/4.gif',
    name: 'OP 4',
    pointsPerHour: 304,
    isStaked: true,
    isPinned: false,
  },
  {
    id: '5',
    image: '/dashboard/mock/operators/5.gif',
    name: 'OP 5',
    pointsPerHour: 304,
    isStaked: true,
    isPinned: false,
  },
  {
    id: '6',
    image: '/dashboard/mock/operators/6.gif',
    name: 'OP 6',
    pointsPerHour: 304,
    isStaked: true,
    isPinned: false,
  },
  {
    id: '7',
    image: '/dashboard/mock/operators/7.gif',
    name: 'OP 7',
    pointsPerHour: 304,
    isStaked: true,
    isPinned: false,
  },
]

const OperatorGrid: React.FC<OperatorGridProps> = ({
  isLoading,
}: OperatorGridProps) => {
  return (
    <StyledOperatorGrid>
      <Header>
        <Title>Operators</Title>
        <Controls>
          <FilterDropdown>
            <p>Filter</p>
            <img src="/assets/chevron-down.svg" alt="chevron down" />
          </FilterDropdown>
          <IconButton>
            <img src="/assets/plus.svg" alt="Settings" />
          </IconButton>
        </Controls>
      </Header>
      <Stats>
        <Stat>
          <Label>Total Operators</Label>
          <Value>7</Value>
        </Stat>
        <Stat>
          <Label>Staked</Label>
          <Value>1</Value>
        </Stat>
        <Stat>
          <Label>Total Points</Label>
          <Value>4,278</Value>
        </Stat>
        <Stat>
          <Label>Points/Hr</Label>
          <Value>912</Value>
        </Stat>
      </Stats>
      <Grid>
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <OperatorCard key={index}>
                <Placeholder />
              </OperatorCard>
            ))
          : operators.map((operator) => (
              <OperatorCard key={operator.id}>
                <Link href={`/operators/${operator.id}`} key={operator.id}>
                  <OperatorImage src={operator.image} alt={operator.name} />
                </Link>
                <OperatorInfo>
                  <OperatorName>{operator.name}</OperatorName>
                  <PointsPerHour>
                    <Label>Per Hour</Label>
                    <Value>{operator.pointsPerHour} rp</Value>
                  </PointsPerHour>
                </OperatorInfo>
                <Actions>
                  <ActionButton isStaked={operator.isStaked}>
                    {operator.isStaked ? 'Unstake' : 'Stake'}
                  </ActionButton>
                  <IconButton>
                    {operator.isPinned ? (
                      <img src="/assets/pinned.svg" alt="Pinned" />
                    ) : (
                      <img src="/assets/unpinned.svg" alt="Unpinned" />
                    )}
                  </IconButton>
                </Actions>
              </OperatorCard>
            ))}
      </Grid>
    </StyledOperatorGrid>
  )
}
const StyledOperatorGrid = styled.section`
  margin-top: 94px;

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 40px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin: 0;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const FilterDropdown = styled.div`
  background-color: transparent;
  width: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(var(--lsd-border-primary));
  border-right: none;
  color: rgb(var(--lsd-text-primary));
  font-weight: 400;
  font-size: 12px;
  padding-left: 12px;
  height: 28px;
  cursor: pointer;

  img {
    padding: 8px;
  }
`

const IconButton = styled.button`
  background-color: transparent;
  border-left: none;
  width: 28px;
  height: 28px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-left: 1px solid rgb(var(--lsd-border-primary));
  cursor: pointer;
  height: 28px;
`

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 2px;
`

const Stat = styled.div`
  background-color: var(--grey-900);
  padding: 16px 8px;
  flex: 1;
`

const Label = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const Value = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`

const OperatorCard = styled.div`
  display: flex;
  flex-direction: column;

  color: rgb(var(--lsd-text-primary));

  a {
    display: flex;
  }
`

const OperatorImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`

const OperatorInfo = styled.div`
  padding: 16px 0;
`

const OperatorName = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const PointsPerHour = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(var(--lsd-border-primary));
  border-radius: 0;
`

const ActionButton = styled.button<{ isStaked: boolean }>`
  flex: 1;
  background-color: ${(props) =>
    props.isStaked ? 'transparent' : 'rgb(var(--lsd-surface-secondary))'};
  color: ${(props) =>
    props.isStaked
      ? 'rgb(var(--lsd-text-primary))'
      : 'rgb(var(--lsd-text-secondary))'};
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 12px;

  cursor: pointer;
`

const Placeholder = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--grey-900);
  border-radius: 8px;
  opacity: 0.5;
`

export default OperatorGrid
