import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'

export const Layout = styled.div`
  position: relative;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: ${uiConfigs.maxContainerWidth}px;
  margin: 0 auto;
  padding: 24px 0;

  z-index: 1;
  position: relative;

  @media (max-width: ${breakpoints.md}px) {
    padding: 0 20px;
  }
`
