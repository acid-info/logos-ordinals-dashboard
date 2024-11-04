import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

const NOVEMBER_1_9AM_UTC = new Date(Date.UTC(2024, 10, 1, 9)) // November 1, 2024 9:00:00 AM UTC
const NOVEMBER_4_1PM_UTC = new Date(Date.UTC(2024, 10, 4, 13)) // November 4, 2024 1:00:00 PM UTC

const getVideoSource = (): string => {
  const now = new Date()

  if (now < NOVEMBER_1_9AM_UTC) {
    return '/videos/countdown-1.mp4'
  } else if (now >= NOVEMBER_1_9AM_UTC && now < NOVEMBER_4_1PM_UTC) {
    return '/videos/countdown-2.mp4'
  } else {
    return '/videos/countdown-3.mp4'
  }
}

const CountdownContainer: React.FC = () => {
  // const [videoSrc, setVideoSrc] = useState<string>(getVideoSource())

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVideoSrc(getVideoSource())
  //   }, 60 * 1000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <Container>
      <Video autoPlay loop muted playsInline>
        <source src={'/videos/countdown-3.mp4'} type="video/mp4" />
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
