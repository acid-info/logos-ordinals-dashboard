import { truncateString } from '@/utils/general.utils'
import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import { api } from '../../../common/api'
import { WALLET_SIGN_MESSAGE_REQUEST } from '../../../constants/wallet'

const options = [
  { label: 'Multiplass', value: 'multiplass' },
  { label: 'Unisat', value: 'unisat' },
  { label: 'Magic Eden', value: 'magic-eden' },
  { label: 'Phantom', value: 'phantom' },
  { label: 'OKX', value: 'okx' },
]

const Dropdown: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const connectWallet = async (wallet: string) => {
    try {
      if (walletAddress) {
        setWalletAddress(null)
        alert('Wallet disconnected.')
      } else {
        if (wallet === 'okx' && window.okxwallet) {
          // Docs: https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider#connect
          const result = await window.okxwallet.bitcoin.connect()
          const address = result.address

          setWalletAddress(address)

          // Docs: https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider#signmessage
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
          alert('Only OKX wallet is supported for now.')
        }
      }
    } catch (error) {
      console.error('Failed to connect or disconnect wallet:', error)
    }
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false)
    }
  }

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown} isExpanded={isExpanded}>
        <div>
          <WalletButton>
            <WalletAddress>
              {walletAddress ? truncateString(walletAddress) : 'Connect Wallet'}
            </WalletAddress>
            <Icon src="/assets/chevron-down.svg" alt="Wallet icon" />
          </WalletButton>
          {isExpanded && (
            <DropdownContent>
              <ScrollDiv>
                {options.map((option, index) => (
                  <WalletName
                    onClick={() => connectWallet(option.value)}
                    key={'wallet-' + index}
                  >
                    {option.label}
                  </WalletName>
                ))}
              </ScrollDiv>
            </DropdownContent>
          )}
        </div>
        {walletAddress && (
          <PointsButton>
            <PointsValue>4,278 XP</PointsValue>
          </PointsButton>
        )}
      </DropdownHeader>
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const DropdownHeader = styled.div<{ isExpanded: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  font-size: 14px;
  line-height: 20px;
`

const ScrollDiv = styled.div`
  box-sizing: border-box;
`

const WalletName = styled.div`
  font-size: 12px;
  line-height: 16px;
  border-bottom: 1px solid rgb(var(--lsd-border-primary));
  display: flex;
  padding: 6px 10px 6px 12px;
  align-items: center;
  align-self: stretch;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }
`

const WalletButton = styled.button`
  width: fit-content;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  height: 28px;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid rgb(var(--lsd-border-primary));
  background: transparent;
  color: rgb(var(--lsd-text-primary));
  cursor: pointer;
`

const WalletAddress = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 90px;
`

const Icon = styled.img`
  padding: 0;
  margin-left: 10px;
`

const DropdownContent = styled.div`
  position: absolute;
  top: 28px;
  left: 0;
  width: 100%;
  background-color: black;
  border: 1px solid white;
  border-top: none;
  z-index: 10;

  box-sizing: border-box;
`

const PointsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  position: absolute;
  background-color: transparent;
  cursor: pointer;
  height: 28px;
  border: 1px solid rgb(var(--lsd-border-primary));
  padding: 8px 12px;
  top: 36px;
  right: 0;
`

const PointsValue = styled.span`
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  color: white;
`

export default Dropdown
