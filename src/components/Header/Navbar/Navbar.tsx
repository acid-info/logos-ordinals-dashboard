import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface NavbarProps {}

const items = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Explore',
    href: '/explore',
  },
  {
    label: 'Leaderboard',
    href: '/leaderboard',
  },
  {
    label: 'Roles',
    href: '/roles',
  },
  {
    label: 'Docs',
    href: '/docs',
  },
  {
    label: 'Multipass',
    href: '/multipass',
  },
]

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter()
  const currentPath = router.pathname

  const isActivePath = (path: string) => {
    return currentPath.includes(path)
  }

  return (
    <Navigation>
      {items.map((item, index) => (
        <Link href={item.href} key={'navbar-item-' + index}>
          {isActivePath(item.href) && (
            <img src={'/assets/navbar-arrow.svg'} alt="navbar-arrow" />
          )}
          <NavItem key={index}>{item.label}</NavItem>
        </Link>
      ))}
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

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 6px;
  }

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
  color: rgb(var(--lsd-text-primary));
  padding: 4px 0;
  cursor: pointer;

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
