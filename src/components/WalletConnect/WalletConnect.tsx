import { breakpoints } from '@/configs/ui.configs'
import { numberWithCommas, truncateString } from '@/utils/general.utils'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import useGetUserInfo from '../../../apis/operators/useGetUserInfo'
import { userInfoAtom } from '../../../atoms/userInfo'
import { walletAddressAtom } from '../../../atoms/wallet'
import { api } from '../../../common/api'
import MultipassItem from './MultipassItem'
import { getMEAddressAndSignature } from './magicEden'
import { getOKXAddressAndSignature } from './okx'
import { getPhantomAddressAndSignature } from './phantom'
import { getUnisatAddressAndSignature } from './unisat'

const options = [
  // { label: 'Multiplass', value: 'multipass' },
  { label: 'Unisat', value: 'unisat' },
  { label: 'Magic Eden', value: 'magic-eden' },
  { label: 'Phantom', value: 'phantom' },
  { label: 'OKX', value: 'okx' },
]

const Dropdown: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [walletAddress, setWalletAddress] = useAtom(walletAddressAtom)

  const router = useRouter()

  const { referral_code, referral_address, referral_source } = router.query

  const [userInfo, setUserInfo] = useAtom(userInfoAtom)

  useGetUserInfo({
    walletAddress,
    setUserInfo,
  })

  const [showMultiPass, setShowMultiPass] = useState(false)

  const walletHandlers = {
    okx: getOKXAddressAndSignature,
    unisat: getUnisatAddressAndSignature,
    'magic-eden': getMEAddressAndSignature,
    phantom: getPhantomAddressAndSignature,
  }

  const connectWallet = async (
    wallet: keyof typeof walletHandlers | 'multipass',
  ) => {
    try {
      if (walletAddress == null) {
        if (wallet === 'multipass') {
          setShowMultiPass(true)
          return
        }

        const handler = walletHandlers[wallet]

        if (!handler) {
          console.error('Wallet not supported')
          return
        }

        const { addr: address, sig: signature } = await handler()

        const response = await api.post('/token/pair', { address, signature })
        setIsExpanded(false)
        setWalletAddress(address)

        const { access, refresh } = response.data.token

        sessionStorage.setItem('accessToken', access)
        sessionStorage.setItem('refreshToken', refresh)
        sessionStorage.setItem('walletAddress', address)

        if (referral_code?.length) {
          await api.post('/user/referral', {
            referral_code: referral_code,
            referral_address: walletAddress,
            referral_source: referral_source || '',
          })
        }
      }
    } catch (error: any) {
      console.log('Failed to connect or disconnect wallet:', error)

      setWalletAddress(null)
    }
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (e: React.MouseEvent) => {
    setIsExpanded(true)
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
    sessionStorage.removeItem('walletAddress')
    setUserInfo(null)

    // refresh page to clear cache
    window.location.reload()
  }

  const handleWalletClick = (option: string) => {
    if (option !== 'multipass') {
      setIsExpanded(false)
    } else {
      setShowMultiPass(true)
      setIsExpanded(true)
      return
    }

    connectWallet(option as keyof typeof walletHandlers)
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
                  showMultiPass ? (
                    <MultipassItem
                      handleClick={() => {
                        setIsExpanded(false)
                        setShowMultiPass(false)
                      }}
                    />
                  ) : (
                    options.map((option, index) => (
                      <WalletName
                        onClick={() => handleWalletClick(option.value)}
                        key={'wallet-' + index}
                      >
                        {option.label}
                      </WalletName>
                    ))
                  )
                ) : (
                  <WalletName onClick={handleDisconnect}>Disconnect</WalletName>
                )}
              </ScrollDiv>
            </DropdownContent>
          )}
        </div>
      </DropdownHeader>
      {walletAddress && (
        <PointsButton>
          <PointsValue>
            {`${numberWithCommas(userInfo?.total_xp) || 0}`} XP
          </PointsValue>
        </PointsButton>
      )}
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: ${breakpoints.md}px) {
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
  position: absolute;
  background-color: transparent;
  height: 28px;
  border: 1px solid rgb(var(--lsd-border-primary));
  padding: 8px 12px;
  top: 0px;
  left: 134px;
  z-index: 100000;

  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

const PointsValue = styled.span`
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  color: white;
`

export default Dropdown
