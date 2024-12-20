import { Dropdown } from '@/components/Dropdown'
import { OperatorGrid } from '@/components/Explore/OperatorGrid'
import { defaultFilterState, filterAtom } from '@/states/filterState'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import React, { useCallback, useMemo } from 'react'
import useGetOperators from '../../../apis/operators/useGetOperators'

import {
  ARCHETYPE,
  BACKGROUND,
  COMP,
  GENERATION,
  HELMET,
  JACKET,
  SKIN,
} from '../../../constants/operators'
import { processOperators, shuffleOperators } from '../../../utils/operators'

interface ExploreSectionProps {}

const ExploreContainer: React.FC<ExploreSectionProps> = () => {
  const { data, isLoading } = useGetOperators()

  const [filter, setFilter] = useAtom(filterAtom)

  const processedOperators = processOperators(
    data as any,
    filter?.archetype?.slice(),
  )

  const selectedOperators = useMemo(() => {
    if (!processedOperators || !filter) return []
    const filterCopied = JSON.parse(JSON.stringify(filter))

    return processedOperators
      ?.filter((op) => filterCopied.comp.includes(op.comp))
      ?.filter((op) => filterCopied.skin.includes(op.skin))
      ?.filter((op) => filterCopied.background.includes(op.background))
      ?.filter((op) => filterCopied.helmet.includes(op.helmet))
      ?.filter((op) => filterCopied.jacket.includes(op.jacket))
  }, [processedOperators, filter])

  const randomizedOperators = shuffleOperators(selectedOperators)

  const handleFilterChange = (
    selectedOptions: string[],
    filterType: keyof typeof filter,
  ) => {
    setFilter((prev) => ({
      ...prev,
      [filterType]: selectedOptions,
    }))
  }

  const handleResetAll = useCallback(() => {
    setFilter(JSON.parse(JSON.stringify(defaultFilterState)))
  }, [setFilter])

  return (
    <Container>
      <h1 className="section-title">Operators</h1>
      <Paragraph>
        The Logos Operator collection consists of 5,000 unique ordinals, each
        aligned with one of ten archetypes. These identities serve as more than
        mere avatars—they are symbols of each participant&lsquo;s role within
        the Logos greater movement.
      </Paragraph>
      <CTAButton href="https://exit.logos.co/discover" target="_blank">
        Discover Your Archetype
        <img src="/assets/chevron-right.svg" alt="chevron-right" />
      </CTAButton>
      <DropdownContainer>
        <Filters>
          <Dropdown
            title="Generation"
            options={GENERATION}
            onSelectionChange={handleFilterChange}
            filterType="generation"
            prefill={filter?.generation.slice()}
          />
          <Dropdown
            title="Archetype"
            options={ARCHETYPE}
            onSelectionChange={handleFilterChange}
            filterType="archetype"
            prefill={filter?.archetype.slice()}
          />
          <Dropdown
            title="Comp"
            options={COMP}
            onSelectionChange={handleFilterChange}
            filterType="comp"
            prefill={filter?.comp.slice()}
          />
          <Dropdown
            title="Skin"
            options={SKIN}
            onSelectionChange={handleFilterChange}
            filterType="skin"
            prefill={filter?.skin.slice()}
          />
          <Dropdown
            title="Helmet"
            options={HELMET}
            onSelectionChange={handleFilterChange}
            filterType="helmet"
            prefill={filter?.helmet.slice()}
          />
          <Dropdown
            title="Jacket"
            options={JACKET}
            onSelectionChange={handleFilterChange}
            filterType="jacket"
            prefill={filter?.jacket.slice()}
          />
          <Dropdown
            title="Background"
            options={BACKGROUND}
            onSelectionChange={handleFilterChange}
            filterType="background"
            prefill={filter?.background.slice()}
          />
        </Filters>
        <ResetAll onClick={handleResetAll}>
          Reset All <img src="/assets/close-black.svg" alt="close-black" />
        </ResetAll>
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
  position: relative;
  gap: 16px;

  flex-wrap: wrap;
  margin: 58px auto 0 auto;

  @media (max-width: 768px) {
    display: grid;
    width: 100%;

    border-left: 1px solid white;
    border-right: 1px solid white;

    margin: 60px auto 0 auto;

    grid-template-columns: repeat(2, 1fr);
  }
`

const ResetAll = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  border: none;
  height: 42px;
  padding: 10px 14px 10px 18px;
  gap: 14px;
  /* position: absolute;
  right: -136px; */
  cursor: pointer;

  @media (max-width: 1190px) {
    display: none;
  }
`

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  max-width: 569px;
  letter-spacing: 0.14px;
  margin: 22px auto 32px auto;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    margin: 10px auto 0 auto;
  }
`

const CTAButton = styled.a`
  display: flex;
  font-size: 14px;
  letter-spacing: 0.14px;
  line-height: 20px;
  gap: 16px;
  padding-left: 18px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  background-color: transparent;
  padding: 0;
  color: white;
  padding: 10px 18px;
  cursor: pointer;
  margin: 0 auto;
  text-decoration: none;
`

const Filters = styled.div`
  display: flex;
  align-items: flex-start;
`

export default ExploreContainer
