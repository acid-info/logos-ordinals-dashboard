import { defaultFilterState } from '@/states/filterState'
import styled from '@emotion/styled'
import { hookstate, useHookstate } from '@hookstate/core'
import React, { useEffect, useRef, useState } from 'react'
import Checkbox from './Checkbox' // Import the CustomCheckbox

interface DropdownProps {
  title: string
  options: string[]
  filterType: string
  onSelectionChange: (selectedOptions: string[], filterType: string) => void
  prefill?: string[]
}

const globalState = hookstate(() =>
  JSON.parse(JSON.stringify(defaultFilterState)),
)

const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
  filterType,
  onSelectionChange,
  prefill = [],
}) => {
  const [updated, setUpdated] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const state = useHookstate(globalState)
  const defualtState = state.get()

  useEffect(() => {
    if (defualtState[filterType]?.length === selectedOptions?.length) {
      setUpdated(false)
    }
  }, [defualtState, selectedOptions])

  useEffect(() => {
    if (prefill?.length) {
      setSelectedOptions(prefill)
    }
  }, [prefill])

  const handleUpdate = (selected: string[]) => {
    if (selected?.length !== options?.length) {
      setUpdated(true)
    } else {
      setUpdated(false)
    }
  }

  const handleSelect = (option: string) => {
    let newSelectedOptions = []
    if (selectedOptions.includes(option)) {
      newSelectedOptions = selectedOptions.filter((o) => o !== option)
    } else {
      newSelectedOptions = [...selectedOptions, option]
    }
    setSelectedOptions(newSelectedOptions)
    onSelectionChange(newSelectedOptions, filterType)

    handleUpdate(newSelectedOptions)
  }

  const selectAll = () => {
    setSelectedOptions(options)
    onSelectionChange(options, filterType)

    setUpdated(false)
  }

  const clearAll = () => {
    setSelectedOptions([])
    onSelectionChange([], filterType)

    setUpdated(true)
  }

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false)
    }
  }

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown} isExpanded={isExpanded}>
        <TitleContainer>
          {updated && <Dot isExpanded={isExpanded} />}
          <span>{title}</span>
        </TitleContainer>
        <Chevron isExpanded={isExpanded}>
          <img src="/assets/chevron-down.svg" alt="chevron down" />
        </Chevron>
      </DropdownHeader>
      {isExpanded && (
        <DropdownContent>
          <ScrollDiv>
            {options.map((option, index) => (
              <Checkbox
                key={index}
                checked={selectedOptions.includes(option)}
                onChange={() => handleSelect(option)}
                label={option}
              />
            ))}
          </ScrollDiv>
          <ButtonContainer>
            <Button onClick={selectAll}>Select All</Button>
            <Button onClick={clearAll}>Clear</Button>
          </ButtonContainer>
        </DropdownContent>
      )}
    </DropdownContainer>
  )
}

// Additional styled components for Dropdown

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const DropdownHeader = styled.div<{ isExpanded: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  background-color: ${({ isExpanded }) => (isExpanded ? 'white' : 'black')};
  color: ${({ isExpanded }) => (isExpanded ? 'black' : 'white')};
  outline: 1px solid white;

  &:hover {
    background-color: white;
    color: black;

    img {
      filter: invert(100%);
    }
  }
`

const Chevron = styled.span<{ isExpanded: boolean }>`
  display: inline-flex;
  transition: transform 0.3s ease;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: black;
  border: 1px solid white;
  z-index: 10;

  box-sizing: border-box;
`

const ButtonContainer = styled.div`
  display: flex;
  height: 40px;
`

const Button = styled.button`
  background-color: transparent;
  border-top: 1px solid white;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  color: white;
  cursor: pointer;

  &:first-of-type {
    border-right: 1px solid white;
  }
`

const ScrollDiv = styled.div`
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;

  // white scrollbar
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
`

const Dot = styled.div<{ isExpanded: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ isExpanded }) => (isExpanded ? 'black' : 'white')};
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export default Dropdown
