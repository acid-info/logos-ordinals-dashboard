import HamburguerMenu from '@/components/HamburgerMenu/HamburgerMenu'
import { WalletConnect } from '@/components/WalletConnect'
import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { Navbar } from '../Navbar'

declare global {
  interface Window {
    ethereum: any
    okxwallet: any
    unisat: any
    phantom: any
    solana: any
  }
}

interface NavbarProps {}

const Header: React.FC<NavbarProps> = () => {
  return (
    <Container>
      <Link href="/">
        <Logo src="/assets/logo.svg" alt="Logo" />
      </Link>
      <DesktopNavbar>
        <Navbar />
      </DesktopNavbar>
      <UserActions>
        <Link href="https://gitbook.logos.co/" passHref target="_blank">
          <GitbookButton>
            <span>Gitbook</span>
          </GitbookButton>
        </Link>
        <WalletConnect />
        {/* {process.env.NEXT_PUBLIC_API_MODE === 'development' ? (
          <WalletConnect />
        ) : (
          <Link
            href="https://discord.com/invite/logosnetwork"
            passHref
            target="_blank"
          >
            <SocialButton>
              <span>Join our Discord</span>
              <Icon src="/icons/discord-white.svg" alt="Discord" />
            </SocialButton>
          </Link>
        )} */}
        <HamburguerMenu />
      </UserActions>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`

const Logo = styled.img`
  object-fit: contain;
  width: 89px;

  @media (max-width: 768px) {
    width: 74px;
  }
`

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    text-decoration: none;
  }
`

const SocialButton = styled.button`
  width: 142px;
  box-sizing: border-box;
  gap: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  height: 28px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid rgb(var(--lsd-border-primary));
  background: transparent;
  color: rgb(var(--lsd-text-primary));
  cursor: pointer;

  span {
    white-space: nowrap;
  }
`

const Icon = styled.img`
  padding: 0;
`

const DesktopNavbar = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

const GitbookButton = styled.button`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid rgb(var(--lsd-border-primary));
  background: transparent;
  border-radius: 32px;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.12px;

  color: white;
  cursor: pointer;

  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`

export default Header
