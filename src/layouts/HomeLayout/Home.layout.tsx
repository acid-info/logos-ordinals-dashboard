import { BackgroundGradient } from '@/components/BackgroundGradient'
import { Header } from '@/components/Header/Header'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react'

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = (
  props: PropsWithChildren,
) => {
  return (
    <div>
      <Container>
        <Header />
        <main>{props.children}</main>
      </Container>
      <BackgroundGradient />
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${uiConfigs.maxContainerWidth}px;

  margin: 0 auto;
  padding: 24px 0 0 0;
  height: 100vh;

  z-index: 1;
  position: relative;

  @media (max-width: ${breakpoints.md}px) {
    padding: 0 20px;
  }
`

export default DefaultLayout
