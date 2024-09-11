import { Header } from '@/components/Header/Header'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react'

interface DashboardLayoutProps {}

const DashboardLayout: React.FC<DashboardLayoutProps> = (
  props: PropsWithChildren,
) => {
  return (
    <Container>
      <Header />
      <main>{props.children}</main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: ${uiConfigs.maxContainerWidth}px;

  margin: 0 auto;
  padding: 24px;

  @media (max-width: ${breakpoints.md}px) {
    padding: 0 20px;
  }
`

export default DashboardLayout
