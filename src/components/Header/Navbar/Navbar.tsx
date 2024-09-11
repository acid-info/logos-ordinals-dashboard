import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Navigation>
      <NavItem active>Dashboard</NavItem>
      <NavItem>Explore</NavItem>
      <NavItem>Leaderboard</NavItem>
      <NavItem>Docs</NavItem>
      <NavItem>Auction</NavItem>
      <NavItem>Roles</NavItem>
    </Navigation>
  )
}

const Navigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 37px;
  list-style-type: none;

  @media (max-width: ${breakpoints.md}px) {
    position: static;
    transform: none;
    flex-wrap: wrap;
  }
`

const NavItem = styled.li<{ active?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  padding: 4px 0;

  ${(props) =>
    props.active &&
    `
    &::before {
      content: '>';
      margin-right: 6px;
    }
  `}
`

export default Navbar
