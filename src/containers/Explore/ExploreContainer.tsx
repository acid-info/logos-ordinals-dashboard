import { Dropdown } from '@/components/Dropdown'
import { OperatorGrid } from '@/components/Explore/OperatorGrid'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import useGetOperators from '../../../apis/operators/useGetOperators'
import {
  ARCHETYPE,
  BACKGROUND,
  COMP,
  HELMET,
  JACKET,
  SKIN,
} from '../../../constants/operators'
import { Archetype } from '../../../types/operators'
import { processOperators, shuffleOperators } from '../../../utils/operators'

interface ExploreSectionProps {}

const ExploreSection: React.FC<ExploreSectionProps> = () => {
  const { data, isLoading } = useGetOperators()

  const [filter, setFilter] = useState<{
    archetype: Archetype[]
    comp: string[]
    skin: string[]
    helmet: string[]
    jacket: string[]
    background: string[]
  }>({
    archetype: [],
    comp: [],
    skin: [],
    helmet: [],
    jacket: [],
    background: [],
  })

  const processedOperators = processOperators(data as any, filter.archetype)

  const selectedOperators = processedOperators?.filter((operator) => {
    // filter by comp, skin, helmet, jacket, background
    return (
      (filter.comp.length === 0 ||
        filter.comp.includes(operator.comp as string)) &&
      (filter.skin.length === 0 ||
        filter.skin.includes(operator.skin as string)) &&
      (filter.helmet.length === 0 ||
        filter.helmet.includes(operator.helmet as string)) &&
      (filter.jacket.length === 0 ||
        filter.jacket.includes(operator.jacket as string)) &&
      (filter.background.length === 0 ||
        filter.background.includes(operator.background as string))
    )
  })

  const randomizedOperators = shuffleOperators(selectedOperators)

  const handleFilterChange = (
    selectedOptions: string[],
    filterType: string,
  ) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: selectedOptions,
    }))
  }

  return (
    <Container>
      <h1 className="section-title">Operators</h1>
      <DropdownContainer>
        <Dropdown
          title="Archetype"
          options={ARCHETYPE}
          onSelectionChange={handleFilterChange}
          filterType="archetype"
          prefill={ARCHETYPE}
        />
        <Dropdown
          title="Comp"
          options={COMP}
          onSelectionChange={handleFilterChange}
          filterType="comp"
          prefill={COMP}
        />
        <Dropdown
          title="Skin"
          options={SKIN}
          onSelectionChange={handleFilterChange}
          filterType="skin"
          prefill={SKIN}
        />
        <Dropdown
          title="Helmet"
          options={HELMET}
          onSelectionChange={handleFilterChange}
          filterType="helmet"
          prefill={HELMET}
        />
        <Dropdown
          title="Jacket"
          options={JACKET}
          onSelectionChange={handleFilterChange}
          filterType="jacket"
          prefill={JACKET}
        />
        <Dropdown
          title="Background"
          options={BACKGROUND}
          onSelectionChange={handleFilterChange}
          filterType="background"
          prefill={BACKGROUND}
        />
      </DropdownContainer>
      <OperatorGrid
        key={JSON.stringify(filter)}
        data={randomizedOperators as any}
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
    margin-top: 70px;
    letter-spacing: 0.4px;
  }

  @media (max-width: 768px) {
    .section-title {
      margin-top: 60px;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.32px;
    }
  }
`

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 911px;
  flex-wrap: wrap;
  margin: 70px auto 0 auto;

  @media (max-width: 768px) {
    display: grid;
    width: 100%;

    border-left: 1px solid white;
    border-right: 1px solid white;

    margin: 60px auto 0 auto;

    grid-template-columns: repeat(2, 1fr);
  }
`

export default ExploreSection
