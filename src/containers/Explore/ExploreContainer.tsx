import { Dropdown } from '@/components/Dropdown'
import { OperatorGrid } from '@/components/Explore/OperatorGrid'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import useGetOperators from '../../../apis/operators/useGetOperators'
import { Archetype } from '../../../types/operators'
import { processOperators } from '../../../utils/operators'

interface ExploreSectionProps {}

// one of Archetype
const archetypes: Archetype[] = [
  'Alchemist',
  'Artisan',
  'Explorer',
  'Illuminator',
  'Magician',
  'Memetic',
  'Oracle',
  'Outlaw',
  'Philosopher',
  'Polymath',
]

const ExploreSection: React.FC<ExploreSectionProps> = () => {
  const { data, isLoading } = useGetOperators()
  const [selectedArchetypes, setSelectedArchetypes] = useState<Archetype[]>([])

  const processedOperators = processOperators(data as any, selectedArchetypes)

  const handleSelectionChange = (selectedOptions: Archetype[]) => {
    setSelectedArchetypes(selectedOptions)
  }

  return (
    <Container>
      <h1 className="section-title">Explore Operators</h1>
      <DropdownContainer>
        <Dropdown
          title="Archetype"
          options={archetypes}
          onSelectionChange={handleSelectionChange}
        />
      </DropdownContainer>
      <OperatorGrid
        key={selectedArchetypes.join(',')}
        data={processedOperators as any}
        isLoading={isLoading}
      />
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;

  .section-title {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-top: 60px;
  }
`

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`

export default ExploreSection
