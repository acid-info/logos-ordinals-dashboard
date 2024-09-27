import { OperatorFilter } from '@/components/Explore/OperatorFilter'
import { OperatorGrid } from '@/components/Explore/OperatorGrid'
import styled from '@emotion/styled'
import React from 'react'
import useGetOperators from '../../../apis/operators/useGetOperators'
import { processOperators } from '../../../utils/operators'
interface ExploreSectionProps {}

const ExploreSection: React.FC<ExploreSectionProps> = () => {
  const { data, isLoading } = useGetOperators()
  const processedOperators = processOperators(data as any)

  return (
    <StyledExploreSection>
      <h1 className="section-title">Explore Operators</h1>
      <OperatorFilter />
      <OperatorGrid data={processedOperators as any} isLoading={isLoading} />
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
`

export default ExploreSection
