import { OperatorGrid } from '@/components/Dashboard/OperatorGrid'
import { OperatorPanel } from '@/components/Dashboard/OperatorPanel'
import { ProgressBar } from '@/components/Dashboard/ProgressBar'
import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useAtomValue, useSetAtom } from 'jotai'
import React from 'react'
import useGetUserInfo from '../../../apis/operators/useGetUserInfo'
import { userInfo } from '../../../atoms/userInfo'
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
  const setUserInfo = useSetAtom(userInfo)

  const walletAddress = useAtomValue(walletAddressAtom)

  const { data: userInfoData, isLoading: isUserInfoLoading } = useGetUserInfo({
    walletAddress,
    setUserInfo,
  })

  // console.log('userInfoData', userInfoData)

  const processedOperators = processMyOperators(userInfoData?.operators)

  return (
    <Container {...props}>
      <Wrapper>
        <LeftColumn>
          <MobileProgressBar>
            <ProgressBar progress={30} claimPosition={76} />
          </MobileProgressBar>
          <OperatorPanel />
        </LeftColumn>
        <RightColumn>
          <DesktopProgressBar>
            <ProgressBar progress={30} claimPosition={76} />
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
