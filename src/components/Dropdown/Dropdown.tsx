import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import Checkbox from './Checkbox' // Import the CustomCheckbox

interface DropdownProps {
  title: string
  options: string[]
  onSelectionChange: (selectedOptions: any) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
  onSelectionChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleSelect = (option: string) => {
    let newSelectedOptions = []
    if (selectedOptions.includes(option)) {
      newSelectedOptions = selectedOptions.filter((o) => o !== option)
    } else {
      newSelectedOptions = [...selectedOptions, option]
    }
    setSelectedOptions(newSelectedOptions)
    onSelectionChange(newSelectedOptions)
  }

  const selectAll = () => {
    setSelectedOptions(options)
    onSelectionChange(options)
  }

  const clearAll = () => {
    setSelectedOptions([])
    onSelectionChange([])
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
      <DropdownHeader onClick={toggleDropdown}>
        <span>{title}</span>
        <Chevron isExpanded={isExpanded}>
          <img src="/assets/chevron-down.svg" alt="chevron down" />
        </Chevron>
      </DropdownHeader>
      {isExpanded && (
        <DropdownContent>
          {options.map((option, index) => (
            <Checkbox
              key={index}
              checked={selectedOptions.includes(option)}
              onChange={() => handleSelect(option)}
              label={option}
            />
          ))}
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
  width: 200px;
`

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border: 1px solid white;
  background-color: black;
  color: white;
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
  padding: 10px;
  box-sizing: border-box;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  width: 100%;
  color: white;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`

export default Dropdown
