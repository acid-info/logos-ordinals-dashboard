import styled from '@emotion/styled'
import React, { useState } from 'react'

interface CollapsibleProps {
  header: string
  children: React.ReactNode
}

const Collapse: React.FC<CollapsibleProps> = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Header onClick={toggleOpen}>
        <span>{header}</span>
        <Chevron isExpanded={isOpen}>
          {isOpen ? (
            <img src="/assets/chevron-down-purple.svg" alt="chevron up" />
          ) : (
            <img src="/assets/chevron-down-purple.svg" alt="chevron down" />
          )}
        </Chevron>
      </Header>
      <Body isOpen={isOpen}>{children}</Body>
    </Container>
  )
}

const Container = styled.div`
  background-color: #320430;
  border-radius: 8px;
  color: #f29ae9;
  cursor: pointer;
`

const Header = styled.div`
  padding: 20px 16px 20px 8px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Body = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: space-between;
  max-height: ${({ isOpen }) => (isOpen ? '100px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #260324;
  padding: 16px 8px;
  font-size: 14px;
  line-height: 20px;
  color: #f29ae9;
  letter-spacing: 0.14px;
`

const Chevron = styled.span<{ isExpanded: boolean }>`
  display: inline-flex;
  transition: transform 0.3s ease;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`

export default Collapse
