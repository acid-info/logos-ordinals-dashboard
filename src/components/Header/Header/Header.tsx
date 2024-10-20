import HamburguerMenu from '@/components/HamburgerMenu/HamburgerMenu'
import { breakpoints } from '@/configs/ui.configs'
import { truncateString } from '@/utils/general.utils'
import styled from '@emotion/styled'
import Link from 'next/link'
import React, { useState } from 'react'
import { api } from '../../../../common/api'
import { WALLET_SIGN_MESSAGE_REQUEST } from '../../../../constants/wallet'
import { Navbar } from '../Navbar'

declare global {
  interface Window {
    ethereum: any
    okxwallet: any
  }
}

interface NavbarProps {}

const Header: React.FC<NavbarProps> = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const connectWallet = async () => {
    try {
      if (walletAddress) {
        setWalletAddress(null)
        alert('Wallet disconnected.')
      } else {
        // DOCS: https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider#connect
        if (window.okxwallet) {
          const result = await window.okxwallet.bitcoin.connect()
          const address = result.address

          setWalletAddress(address)

          const signature = await window.okxwallet.bitcoin.signMessage(
            WALLET_SIGN_MESSAGE_REQUEST,
            'bip322-simple',
          )

          const response = await api.post('/token/pair', {
            address,
            signature,
          })

          console.log('Token pair response:', response)
        } else {
          alert('No Bitcoin wallet found. Please install OKX Wallet.')
        }
      }
    } catch (error) {
      console.error('Failed to connect or disconnect wallet:', error)
    }
  }

  return (
    <Container>
      <Link href="/">
        <Logo src="/assets/logo.svg" alt="Logo" />
      </Link>
      <DesktopNavbar>
        <Navbar />
      </DesktopNavbar>
      <UserActions>
        <Link
          href="https://app.gitbook.com/o/JaXLyutHsCMnV7ROVSHw/s/Q0TLtn9WN6DR3Lzv4Gcs/logos-operators/pillars-and-contributions"
          passHref
          target="_blank"
        >
          <GitbookButton>
            <span>Gitbook</span>
          </GitbookButton>
        </Link>
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
        <HamburguerMenu />
        <WalletButton onClick={connectWallet}>
          <WalletAddress>
            {walletAddress ? truncateString(walletAddress) : 'Connect'}
          </WalletAddress>
          {/* <Icon src="/assets/btc.svg" alt="Wallet icon" /> */}
        </WalletButton>
        {/* <PointsButton>
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
  gap: 8px;

  a {
    text-decoration: none;
  }
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

const DesktopNavbar = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`

const WalletButton = styled(Button)`
  width: fit-content;
`

const WalletAddress = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

// const PointsButton = styled(Button)`
//   width: 83px;
// `

// const PointsValue = styled.span``

const Icon = styled.img`
  padding: 0;
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
