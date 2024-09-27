import { OperatorGrid } from '@/components/Dashboard/OperatorGrid'
import { OperatorPanel } from '@/components/Dashboard/OperatorPanel'
import { ProgressBar } from '@/components/Dashboard/ProgressBar'
import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'
import useGetOperators from '../../../apis/operators/useGetOperators'

export type DashboardPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export interface Operator {
  id: number
  name: string
  image_400_url: string
}

export interface Group {
  id: number
  name: string
  operators: Operator[]
}

export interface ProcessedOperator {
  id: string
  image: string
  name: string
  pointsPerHour: number
  isStaked: boolean
  isPinned: boolean
}

function processOperators(data: Group[]): ProcessedOperator[] {
  return data?.flatMap((group) =>
    group.operators.map((operator) => ({
      id: operator.id.toString(), // Convert ID to string
      image: operator.image_400_url,
      name: `OP ${operator.id}`,
      pointsPerHour: Math.floor(Math.random() * 500), // Random value for points per hour
      isStaked: false,
      isPinned: false,
    })),
  )
}

const DashboardContainer: React.FC<DashboardPageProps> = ({
  children,
  ...props
}) => {
  const { data, isLoading } = useGetOperators()

  const processedOperators = processOperators(data)

  function getRandomSubset<T>(array: T[], count: number): T[] {
    const shuffled = array?.sort(() => 0.5 - Math.random())
    return shuffled?.slice(0, count)
  }

  const random20Operators = getRandomSubset(processedOperators, 20)

  return (
    <Container {...props}>
      <Wrapper>
        <LeftColumn>
          <OperatorPanel />
        </LeftColumn>
        <RightColumn>
          <ProgressBar progress={20} claimPosition={60} />
          <OperatorGrid data={random20Operators} isLoading={isLoading} />
        </RightColumn>
      </Wrapper>
    </Container>
  )
}

export default DashboardContainer

const Container = styled.div`
  @media (max-width: ${breakpoints.lg}px) {
    margin-inline: 10px;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 0 16px;

  margin-top: 80px;
  width: 100%;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`

const LeftColumn = styled.section`
  grid-column: 1 / 6;

  @media (max-width: ${breakpoints.md}px) {
    grid-column: 1 / 2;
  }
`

const RightColumn = styled.section`
  grid-column: 8 / 23;

  @media (max-width: ${breakpoints.md}px) {
    grid-column: 1 / 2;
  }
`
