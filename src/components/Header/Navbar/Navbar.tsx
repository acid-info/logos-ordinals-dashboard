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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  gap: 37px;
  list-style-type: none;

  @media (max-width: 1300px) {
    position: static;
    transform: none;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li<{ active?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
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
