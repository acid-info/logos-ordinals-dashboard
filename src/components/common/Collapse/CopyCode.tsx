import styled from '@emotion/styled'
import React from 'react'
import Collapse from './Collapse'

const CopyCode: React.FC = () => {
  const content = '445f5..4645sdf54'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
    alert('Copied to clipboard!')
  }

  return (
    <Collapse header="Refer Operators +100 XP">
      <Wrapper>
        <div>{content}</div>
        <CopyButton onClick={copyToClipboard}>
          <img src="/assets/file-copy-purple.svg" alt="file copy" />
        </CopyButton>
      </Wrapper>
    </Collapse>
  )
}

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #f29ae9;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 28px;
`

export default CopyCode
