import styled from '@emotion/styled'
import React, { useState } from 'react'

interface CollapsibleProps {
  header: string
  content: string
  enableCopy?: boolean
}

const Collapse: React.FC<CollapsibleProps> = ({
  header,
  content,
  enableCopy = true,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
    alert('Copied to clipboard!')
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
      <Body isOpen={isOpen}>
        {content}
        {enableCopy && (
          <CopyButton onClick={copyToClipboard}>
            <img src="/assets/file-copy-purple.svg" alt="file copy" />
          </CopyButton>
        )}
      </Body>
    </Container>
  )
}

const Container = styled.div`
  background-color: #320430;
  border-radius: 8px;
  margin: 10px 0;
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
  background-color: #320430;
  padding: 20px 16px 20px 8px;
  font-size: 14px;
  line-height: 20px;
  color: #f29ae9;
  letter-spacing: 0.14px;
`

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #f29ae9;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
`

const Chevron = styled.span<{ isExpanded: boolean }>`
  display: inline-flex;
  transition: transform 0.3s ease;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`

export default Collapse
