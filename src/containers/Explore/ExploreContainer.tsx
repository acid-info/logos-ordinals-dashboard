import { OperatorFilter } from '@/components/Explore/OperatorFilter'
import { OperatorGrid } from '@/components/Explore/OperatorGrid'
import styled from '@emotion/styled'
import React from 'react'

interface ExploreSectionProps {}

const ExploreSection: React.FC<ExploreSectionProps> = () => {
  return (
    <StyledExploreSection>
      <h1 className="section-title">Operators</h1>
      <OperatorFilter />
      <OperatorGrid />
    </StyledExploreSection>
  )
}

const StyledExploreSection = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .section-title {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-top: 60px;
  }

  @media (max-width: 991px) {
    padding: 0 20px;

    .section-title {
      margin-top: 40px;
    }
  }
`

export default ExploreSection
