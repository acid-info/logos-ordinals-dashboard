import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const ToastContainer = styled.div`
  position: relative;
  padding: 14px;
  justify-content: flex-end;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #321504;
  z-index: 10000;

  color: #fe740c;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.14px;

  span {
    margin-left: 20px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 12px;
    line-height: 16px;

    span {
      // new line
      display: block;
    }
  }
`

const Toast: React.FC = () => {
  const [time, setTime] = useState('DD:HH:mm:ss')

  useEffect(() => {
    const targetTime = new Date('2024-10-31T17:00:00Z').getTime()

    const formatTime = (timeInSeconds: number) => {
      const days = Math.floor(timeInSeconds / (3600 * 24))
      const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600)
      const minutes = Math.floor((timeInSeconds % 3600) / 60)
      const seconds = Math.floor(timeInSeconds % 60)

      return `${String(days).padStart(2, '0')}:${String(hours).padStart(
        2,
        '0',
      )}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0',
      )}`
    }

    const updateRemainingTime = () => {
      const currentTime = new Date().getTime()
      const remainingTimeInSeconds = Math.floor(
        (targetTime - currentTime) / 1000,
      )

      if (remainingTimeInSeconds >= 0) {
        setTime(formatTime(remainingTimeInSeconds))
      } else {
        setTime('00:00:00:00')
      }
    }

    const interval = setInterval(updateRemainingTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ToastContainer>
      Logos Ordinals Mint Begins October 31, 2024 at 5PM UTC
      <span>Time remaining: {time}</span>
    </ToastContainer>
  )
}

export default Toast