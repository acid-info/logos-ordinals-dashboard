import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface NavbarProps {}

interface NavItem {
  label: string
  href: string
  isDisabled?: boolean
  isSoon?: boolean
}

export const navItems: NavItem[] = [
  {
    label: 'Countdown',
    href: '/countdown',
  },
  {
    label: 'Explore',
    href: '/',
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
    // isDisabled: true,
    // isSoon: true,
  },
  // {
  //   label: 'Leaderboard',
  //   href: '/leaderboard',
  // },
  // {
  //   label: 'Roles',
  //   href: '/roles',
  // },
  {
    label: 'Docs',
    href: '/docs',
  },
  // {
  //   label: 'Multipass',
  //   href: '/multipass',
  // },
]

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter()
  const currentPath = router.pathname

  const isActivePath = (path: string) => {
    return currentPath === path
    // return currentPath.includes(path)
  }

  return (
    <Navigation>
      {navItems.map((item, index) =>
        item?.isDisabled === true ? (
          <NavItemContainer key={index}>
            <NavItem isDisabled active={isActivePath(item.href)}>
              {item.label}
            </NavItem>
            {item?.isSoon && <SoonText>Soon</SoonText>}
          </NavItemContainer>
        ) : (
          <Link href={item.href} key={'navbar-item-' + index}>
            {isActivePath(item.href) && (
              <img src={'/assets/navbar-arrow.svg'} alt="navbar-arrow" />
            )}
            <NavItem key={index}>{item.label}</NavItem>
          </Link>
        ),
      )}
    </Navigation>
  )
}

const Navigation = styled.ul`
  display: flex;
  align-items: center;

  gap: 41px;
  list-style-type: none;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 6px;
  }

  @media (max-width: ${breakpoints.md}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    left: unset;
    transform: none;
    gap: 10px;
  }
`

const NavItem = styled.li<{ active?: boolean; isDisabled?: boolean }>`
  font-size: 14px;
  line-height: 20px;
  color: rgb(var(--lsd-text-primary));
  padding: 4px 0;
  cursor: pointer;

  pointer-events: ${(props) => props.isDisabled && 'none'};
  opacity: ${(props) => props.isDisabled && 0.4};

  ${(props) =>
    props.active &&
    `
    &::before {
      content: '>';
      margin-right: 6px;
    }
  `}

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 12px;
    line-height: 16px;
  }
`

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const SoonText = styled.span`
  display: flex;
  padding: 3px 6px;
  justify-content: center;
  align-items: center;

  color: #f29ae9;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.12px;
`

export default Navbar
