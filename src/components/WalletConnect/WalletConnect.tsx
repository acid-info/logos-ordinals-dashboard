import { numberWithCommas, truncateString } from '@/utils/general.utils'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import React, { useEffect, useRef, useState } from 'react'
import { userInfoAtom } from '../../../atoms/userInfo'
import { walletAddressAtom } from '../../../atoms/wallet'
import { api } from '../../../common/api'
import { getMEAddressAndSignature } from './magicEden'
import { getOKXAddressAndSignature } from './okx'
import { getPhantomAddressAndSignature } from './phantom'
import { getUnisatAddressAndSignature } from './unisat'

const options = [
  { label: 'Multiplass', value: 'multiplass' },
  { label: 'Unisat', value: 'unisat' },
  { label: 'Magic Eden', value: 'magic-eden' },
  { label: 'Phantom', value: 'phantom' },
  { label: 'OKX', value: 'okx' },
]

const Dropdown: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [walletAddress, setWalletAddress] = useAtom(walletAddressAtom)

  const [userInfo, setUserInfo] = useAtom(userInfoAtom)

  const walletHandlers = {
    okx: getOKXAddressAndSignature,
    unisat: getUnisatAddressAndSignature,
    'magic-eden': getMEAddressAndSignature,
    phantom: getPhantomAddressAndSignature,
  }

  const connectWallet = async (wallet: keyof typeof walletHandlers) => {
    try {
      if (walletAddress == null) {
        const handler = walletHandlers[wallet]

        if (!handler) {
          console.error('Wallet not supported')
          return
        }

        const { addr: address, sig: signature } = await handler()
        setWalletAddress(address)

        const response = await api.post('/token/pair', { address, signature })
        const { access, refresh } = response.data.token

        sessionStorage.setItem('accessToken', access)
        sessionStorage.setItem('refreshToken', refresh)
        sessionStorage.setItem('walletAddress', address)
      }
    } catch (error: any) {
      console.log('Failed to connect or disconnect wallet:', error)
      alert(error.message)

      setWalletAddress(null)
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

  const handleDisconnect = () => {
    setWalletAddress(null)
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
    sessionStorage.removeItem('walletAddress')
    setUserInfo(null)

    // refresh page to clear cache
    window.location.reload()
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
                {walletAddress == null ? (
                  options.map((option, index) => (
                    <WalletName
                      onClick={() =>
                        connectWallet(
                          option.value as keyof typeof walletHandlers,
                        )
                      }
                      key={'wallet-' + index}
                    >
                      {option.label}
                    </WalletName>
                  ))
                ) : (
                  <WalletName onClick={handleDisconnect}>Disconnect</WalletName>
                )}
              </ScrollDiv>
            </DropdownContent>
          )}
        </div>
        {walletAddress && (
          <PointsButton>
            <PointsValue>
              {`${numberWithCommas(userInfo?.total_xp) || 0}`} XP
            </PointsValue>
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
  min-width: 85px;
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
