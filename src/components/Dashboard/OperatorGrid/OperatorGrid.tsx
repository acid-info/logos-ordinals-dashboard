import { breakpoints } from '@/configs/ui.configs'
import { ProcessedOperator } from '@/containers/Dashboard/DashboardContainer'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

interface OperatorGridProps {
  isLoading: boolean
  data: ProcessedOperator[]
}

const OperatorGrid: React.FC<OperatorGridProps> = ({
  isLoading,
  data,
}: OperatorGridProps) => {
  return (
    <StyledOperatorGrid>
      <Header>
        <Title>Operators</Title>
        <Controls>
          <PlusIcon>
            <img
              src="/assets/plus.svg"
              width={10}
              height={10}
              alt="Add Operator"
            />
          </PlusIcon>
        </Controls>
      </Header>
      <Stats>
        <Stat>
          <Label>Total Operators</Label>
          <Value>7</Value>
        </Stat>
        <Stat>
          <Label>Staked</Label>
          <Value>6</Value>
        </Stat>
        <Stat>
          <Label>Unstaked</Label>
          <Value>1</Value>
        </Stat>
        <Stat>
          <Label>XP/Block</Label>
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
          : data?.map((operator) => (
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
  margin-top: 116px;

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

const PlusIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgb(var(--lsd-border-primary));
  background-color: transparent;
  width: 28px;
  height: 28px;
  cursor: pointer;
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
  grid-template-columns: repeat(auto-fill, minmax(158px, 1fr));
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
  // 1 line of text
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
  -webkit-line-clamp: 1;
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
    props.isStaked ? 'rgb(var(--lsd-surface-secondary))' : 'transparent'};
  color: ${(props) =>
    props.isStaked
      ? 'rgb(var(--lsd-text-secondary))'
      : 'rgb(var(--lsd-text-primary))'};
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 12px;

  &:hover {
    background-color: rgb(var(--lsd-surface-secondary));
    color: rgb(var(--lsd-text-secondary));
  }

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
