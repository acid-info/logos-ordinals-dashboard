import { Dropdown } from '@/components/Dropdown'
import { OperatorGrid } from '@/components/Explore/OperatorGrid'
import { defaultFilterState } from '@/states/filterState'
import styled from '@emotion/styled'
import { hookstate, useHookstate } from '@hookstate/core'
import React from 'react'
import useGetOperators from '../../../apis/operators/useGetOperators'
import {
  ARCHETYPE,
  BACKGROUND,
  COMP,
  HELMET,
  JACKET,
  SKIN,
} from '../../../constants/operators'
import { processOperators, shuffleOperators } from '../../../utils/operators'

interface ExploreSectionProps {}

const globalState = hookstate(defaultFilterState)

const ExploreSection: React.FC<ExploreSectionProps> = () => {
  const { data, isLoading } = useGetOperators()

  const state = useHookstate(globalState)
  const filter = state.get()

  const processedOperators = processOperators(
    data as any,
    filter.archetype.slice(),
  )

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
    ;(state[filterType as keyof typeof filter] as any).set(selectedOptions)
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
          prefill={filter.archetype.slice()}
        />
        <Dropdown
          title="Comp"
          options={COMP}
          onSelectionChange={handleFilterChange}
          filterType="comp"
          prefill={filter.comp.slice()}
        />
        <Dropdown
          title="Skin"
          options={SKIN}
          onSelectionChange={handleFilterChange}
          filterType="skin"
          prefill={filter.skin.slice()}
        />
        <Dropdown
          title="Helmet"
          options={HELMET}
          onSelectionChange={handleFilterChange}
          filterType="helmet"
          prefill={filter.helmet.slice()}
        />
        <Dropdown
          title="Jacket"
          options={JACKET}
          onSelectionChange={handleFilterChange}
          filterType="jacket"
          prefill={filter.jacket.slice()}
        />
        <Dropdown
          title="Background"
          options={BACKGROUND}
          onSelectionChange={handleFilterChange}
          filterType="background"
          prefill={filter.background.slice()}
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
