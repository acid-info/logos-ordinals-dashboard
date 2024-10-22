import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { ProcessedOperator } from '../../../../types/operators'
import OperatorCard from './OperatorCard'

interface OperatorGridProps {
  isLoading: boolean
  data: ProcessedOperator[]
}

const OperatorGrid: React.FC<OperatorGridProps> = ({
  isLoading,
  data,
}: OperatorGridProps) => {
  const stakedOperators = data?.filter((operator) => operator.isStaked)

  const totalXpPerBlock = data?.reduce(
    (acc, operator) => acc + (operator.pointsPerHour ?? 0),
    0,
  )

  return (
    <Container>
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
          <Value>{data?.length || 0}</Value>
        </Stat>
        <Stat>
          <Label>Staked</Label>
          <Value>{stakedOperators?.length || 0}</Value>
        </Stat>
        <Stat>
          <Label>Unstaked</Label>
          <Value>{data?.length - (stakedOperators?.length || 0)}</Value>
        </Stat>
        <Stat>
          <Label>XP/Block</Label>
          <Value>{totalXpPerBlock || 0}</Value>
        </Stat>
      </Stats>
      <Grid>
        {isLoading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <PlaceholderCard key={index}>
              <Placeholder />
            </PlaceholderCard>
          ))
        ) : data?.length === 0 ? (
          <AddOperator href="https://logos.co/exit" target="_blank">
            <PlusIcon>
              <img
                src="/assets/plus.svg"
                width={10}
                height={10}
                alt="Add Operator"
              />
            </PlusIcon>
            <span>Add Operator</span>
          </AddOperator>
        ) : (
          data?.map((operator) => (
            <OperatorCard key={operator.id} operator={operator} />
          ))
        )}
      </Grid>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 116px;

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 70px;
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

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 2px;

  @media (max-width: ${breakpoints.sm}px) {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
  }
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

  @media (max-width: ${breakpoints.sm}px) {
    // 2 columns
    grid-template-columns: repeat(2, 1fr);
  }
`

const PlaceholderCard = styled.div`
  display: flex;
  flex-direction: column;

  color: rgb(var(--lsd-text-primary));

  a {
    display: flex;
  }
`

const Placeholder = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--grey-900);
  border-radius: 8px;
  opacity: 0.5;
`

const AddOperator = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 258px;
  padding: 24px;

  span {
    text-decoration: none;
    color: white;
  }

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`

export default OperatorGrid
