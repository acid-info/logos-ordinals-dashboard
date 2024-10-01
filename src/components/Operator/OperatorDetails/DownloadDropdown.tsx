import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  operator: any
}

function updateImageUrl(inputUrl: string): string {
  if (!inputUrl) return ''
  const urlParts = inputUrl?.split('/')

  if (urlParts.length > 4 && urlParts[4] === '400') {
    urlParts[4] = '1024'
  }

  return urlParts.join('/')
}

const DownloadDropdown = ({ operator }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown} isOpen={isOpen}>
        <span>Download</span>
        <ChevronIconWrapper isOpen={isOpen}>
          <Image
            src="/assets/chevron-down.svg"
            alt="Chevron"
            width={12}
            height={12}
          />
        </ChevronIconWrapper>
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem href={operator?.gif} download>
          <Left>
            <Icon>
              <Image
                src="/assets/download.svg"
                alt="Download"
                width={12}
                height={12}
              />
            </Icon>
            <span>Low Resolution</span>
          </Left>
          <FileType>.gif</FileType>
        </DropdownItem>
        <DropdownItem href={updateImageUrl(operator?.gif)} download>
          <Left>
            <Icon>
              <Image
                src="/assets/download.svg"
                alt="Download"
                width={12}
                height={12}
              />
            </Icon>
            <span>High Resolution</span>
          </Left>
          <FileType>.gif</FileType>
        </DropdownItem>
        <DropdownItem href={operator?.image} download>
          <Left>
            <Icon>
              <Image
                src="/assets/download.svg"
                alt="Download"
                width={12}
                height={12}
              />
            </Icon>
            <span>Low Resolution</span>
          </Left>
          <FileType>.jpeg</FileType>
        </DropdownItem>
        <DropdownItem href={updateImageUrl(operator?.image)} download>
          <Left>
            <Icon>
              <Image
                src="/assets/download.svg"
                alt="Download"
                width={12}
                height={12}
              />
            </Icon>
            <span>High Resolution</span>
          </Left>
          <FileType>.jpeg</FileType>
        </DropdownItem>
      </DropdownContent>
    </DropdownWrapper>
  )
}

// Styled Components
const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const DropdownButton = styled.button<{ isOpen: boolean }>`
  padding: 10px 20px;
  height: 40px;
  border-left: none;
  border-right: 1px solid #fff !important;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  background: transparent;
  position: relative;

  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.14px;
  }
`

const ChevronIconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: absolute;
  right: 14px;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-left: 1px solid #fff;
  margin-left: -1px;
`

const DropdownItem = styled.a`
  color: #fff !important;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;

  &:hover {
    color: #fff;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  * {
    color: #fff;
  }
`

const FileType = styled.span`
  font-size: 12px;
  line-height: 16px;
`

export default DownloadDropdown
