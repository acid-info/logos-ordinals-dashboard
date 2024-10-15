import { Checkbox } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import React, { useState } from 'react'

interface FilterOption {
  label: string
}

const filterOptions: FilterOption[] = [
  {
    label: 'All',
  },
  {
    label: 'Archetype',
  },
  {
    label: 'Comp',
  },
  {
    label: 'Helmet',
  },
  {
    label: 'Jacket',
  },
  {
    label: 'Background',
  },
]

interface OperatorFilterProps {}

const OperatorFilter: React.FC<OperatorFilterProps> = () => {
  const [checked, setChecked] = useState<number | null>(null)

  return (
    <Container>
      {filterOptions.map((option, index) => (
        <FilterOption key={index}>
          <Checkbox
            checked={index === checked}
            onChange={() => setChecked(index)}
          />
          <span className="label">{option.label}</span>
        </FilterOption>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: 74px;
  align-items: start;
  gap: 2px;
  justify-content: start;
  flex-wrap: wrap;
  margin: 74px auto 0 auto;

  .label {
    display: flex;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`

const FilterOption = styled.div`
  display: flex;
  padding: 8px 23px 8px 8px;
  align-items: center;
  background: var(--grey-900);
`

export default OperatorFilter
