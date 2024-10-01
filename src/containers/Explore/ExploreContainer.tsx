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
import { processOperators } from '../../../utils/operators'

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

  const randomizedOperators = selectedOperators?.sort(() => Math.random() - 0.5)

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
        />
        <Dropdown
          title="Comp"
          options={COMP}
          onSelectionChange={handleFilterChange}
          filterType="comp"
        />
        <Dropdown
          title="Skin"
          options={SKIN}
          onSelectionChange={handleFilterChange}
          filterType="skin"
        />
        <Dropdown
          title="Helmet"
          options={HELMET}
          onSelectionChange={handleFilterChange}
          filterType="helmet"
        />
        <Dropdown
          title="Jacket"
          options={JACKET}
          onSelectionChange={handleFilterChange}
          filterType="jacket"
        />
        <Dropdown
          title="Background"
          options={BACKGROUND}
          onSelectionChange={handleFilterChange}
          filterType="background"
        />
      </DropdownContainer>
      <OperatorGrid
        key={randomizedOperators?.join(',')}
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
  }
`

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 911px;
  margin: 70px auto 0 auto;

  & > div:first-of-type {
    border-left: 1px solid white;
  }
`

export default ExploreSection
