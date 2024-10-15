import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useState } from 'react'
import Navbar from '../Header/Navbar/Navbar'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid rgb(var(--lsd-border-primary));
  background: transparent;
  cursor: pointer;

  @media (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`

const HamburguerMenuContainer = styled.div`
  @media (min-width: ${breakpoints.sm}px) {
    display: none;
  }

  position: absolute;
  z-index: 1000;
  top: 58px;
  left: 0;
  padding: 16px;
  width: 100%;
  border: 1px solid rgb(var(--lsd-border-primary));
  background: black;

  gap: 24px;
`

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <img
          src={isOpen ? '/assets/close.svg' : '/assets/hamburger.svg'}
          alt="Hamburguer Menu"
        />
      </Button>
      {isOpen && (
        <HamburguerMenuContainer>
          <Navbar />
        </HamburguerMenuContainer>
      )}
    </>
  )
}

export default HamburguerMenu
