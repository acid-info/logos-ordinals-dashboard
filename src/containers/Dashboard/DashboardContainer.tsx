import { OperatorGrid } from '@/components/Dashboard/OperatorGrid'
import { OperatorPanel } from '@/components/Dashboard/OperatorPanel'
import { ProgressBar } from '@/components/Dashboard/ProgressBar'
import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useAtom, useSetAtom } from 'jotai'
import React, { useEffect } from 'react'
// import useGetUserXP from '../../../apis/general/useGetUserXP'
import useGetEpochs from '../../../apis/general/useGetEpochs'
import useGetUserInfo from '../../../apis/operators/useGetUserInfo'
import { epochsAtom } from '../../../atoms/epochs'
import { userInfoAtom } from '../../../atoms/userInfo'
import { walletAddressAtom } from '../../../atoms/wallet'
import { processMyOperators } from '../../../utils/operators'

export type DashboardPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const DashboardContainer: React.FC<DashboardPageProps> = ({
  children,
  ...props
}) => {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)

  const [walletAddress, setWalletAddress] = useAtom(walletAddressAtom)

  const { isLoading: isUserInfoLoading, refetch } = useGetUserInfo({
    walletAddress,
    setUserInfo,
  })

  const { data: epochsData } = useGetEpochs({
    enabled: true,
  })

  const setEpochs = useSetAtom(epochsAtom)

  useEffect(() => {
    if (epochsData) {
      setEpochs(epochsData)
    }
  }, [epochsData, setEpochs])

  useEffect(() => {
    const walletAddress = sessionStorage.getItem('walletAddress')

    if (walletAddress && userInfo == null) {
      refetch()
      setWalletAddress(walletAddress)
    }
  }, [setUserInfo, walletAddress, userInfo, refetch, setWalletAddress])

  const processedOperators = processMyOperators(userInfo?.operators)

  // console.log('processedOperators', processedOperators)

  // const { data: userXP } = useGetUserXP({
  //   enabled: !!walletAddress && walletAddress.length > 0,
  // })

  // console.log('userXP', userXP)

  const currentRate = 0

  return (
    <Container {...props}>
      <Wrapper>
        <LeftColumn>
          <MobileProgressBar>
            <ProgressBar progress={currentRate} claimPosition={80} />
          </MobileProgressBar>
          <OperatorPanel />
        </LeftColumn>
        <RightColumn>
          <DesktopProgressBar>
            <ProgressBar progress={currentRate} claimPosition={80} />
          </DesktopProgressBar>
          <OperatorGrid
            data={processedOperators}
            isLoading={isUserInfoLoading}
          />
        </RightColumn>
      </Wrapper>
    </Container>
  )
}

export default DashboardContainer

const Container = styled.div``

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 0 16px;

  margin-top: 80px;
  width: 100%;

  @media (max-width: ${breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
  }
`

const LeftColumn = styled.section`
  grid-column: 1 / 6;

  @media (max-width: ${breakpoints.sm}px) {
    grid-column: 1 / 2;
  }
`

const RightColumn = styled.section`
  grid-column: 8 / 23;

  @media (max-width: ${breakpoints.sm}px) {
    grid-column: 1 / 2;
  }
`

const DesktopProgressBar = styled.div`
  display: none;

  @media (min-width: ${breakpoints.sm}px) {
    display: block;
  }
`

const MobileProgressBar = styled.div`
  display: block;
  margin-bottom: 70px;

  @media (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`
