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
        <WalletButton>
          <WalletAddress>bc1qa...vehs9</WalletAddress>
          <Icon src="/assets/btc.svg" alt="Wallet icon" />
        </WalletButton>
        <PointsButton>
          <PointsValue>4,278</PointsValue>
          <Icon src="/assets/stats-up.svg" alt="Points icon" />
        </PointsButton>
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
`

const Logo = styled.img`
  object-fit: contain;
  width: 89px;
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

const WalletButton = styled(Button)`
  width: 140px;
`

const WalletAddress = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PointsButton = styled(Button)`
  width: 83px;
  background-color: rgb(var(--lsd-surface-secondary));
  color: rgb(var(--lsd-text-secondary));
`

const PointsValue = styled.span``

const Icon = styled.img`
  width: 14px;
  height: 14px;
`

export default Header
