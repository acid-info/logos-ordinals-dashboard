import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { Navbar } from '../Navbar'

interface NavbarProps {}

const Header: React.FC<NavbarProps> = () => {
  return (
    <Container>
      <Link href="/">
        <Logo src="/assets/logo.svg" alt="Logo" />
      </Link>
      <Navbar />
      <UserActions>
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
        {/* <WalletButton>
          <WalletAddress>bc1qa...vehs9</WalletAddress>
          <Icon src="/assets/btc.svg" alt="Wallet icon" />
        </WalletButton>
        <PointsButton>
          <PointsValue>4,278</PointsValue>
          <Icon src="/assets/star.png" alt="Points icon" />
        </PointsButton> */}
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
`

const Button = styled.button`
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
`

const SocialButton = styled(Button)`
  width: 142px;
  box-sizing: border-box;
  gap: 12px;

  span {
    white-space: nowrap;
  }
`

// const WalletButton = styled(Button)`
//   width: 140px;
// `

// const WalletAddress = styled.span`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `

// const PointsButton = styled(Button)`
//   width: 83px;
// `

// const PointsValue = styled.span``

const Icon = styled.img`
  padding: 0;
`

export default Header
