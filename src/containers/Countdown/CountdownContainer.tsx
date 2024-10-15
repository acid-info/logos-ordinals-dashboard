import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

const CountdownContainer: React.FC = () => {
  return (
    <Container>
      <Video autoPlay loop muted playsInline>
        <source src="/videos/countdown.mp4" type="video/mp4" />
      </Video>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;

  @media (max-width: ${breakpoints.sm}px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Video = styled.video`
  position: relative;
  width: 100%;
  margin-top: 32px;
`

export default CountdownContainer
