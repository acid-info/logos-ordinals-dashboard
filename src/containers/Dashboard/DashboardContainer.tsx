import { OperatorGrid } from '@/components/Dashboard/OperatorGrid'
import { OperatorPanel } from '@/components/Dashboard/OperatorPanel'
import { ProgressBar } from '@/components/Dashboard/ProgressBar'
import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

export type DashboardPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const DashboardContainer: React.FC<DashboardPageProps> = ({
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <Wrapper>
        <LeftColumn>
          <OperatorPanel />
        </LeftColumn>
        <RightColumn>
          <ProgressBar progress={20} claimPosition={60} />
          <OperatorGrid />
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
