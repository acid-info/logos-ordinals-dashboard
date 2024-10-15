import { Header } from '@/components/Header/Header'
import { Container, Layout } from '@/components/StyledComponents'
import { breakpoints } from '@/configs/ui.configs'

import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react'

interface CountdownLayoutProps {}

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url('/countdown/countdown-desktop-bg.png');
  filter: blur(150px);

  @media (max-width: ${breakpoints.sm}px) {
    background-image: url('/countdown/countdown-mobile-bg.png');
    filter: blur(53px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const CountdownContainer = styled(Container)`
  @media (max-width: ${breakpoints.sm}px) {
    height: 100vh;
  }
`

const Main = styled.main`
  @media (max-width: ${breakpoints.sm}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`

const CountdownLayout: React.FC<CountdownLayoutProps> = (
  props: PropsWithChildren,
) => {
  return (
    <Layout>
      <CountdownContainer>
        <Header />
        <Main>{props.children}</Main>
      </CountdownContainer>
      <BackgroundImage />
    </Layout>
  )
}

export default CountdownLayout
