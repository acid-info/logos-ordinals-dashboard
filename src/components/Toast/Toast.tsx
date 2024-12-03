import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import { userInfoAtom } from '../../../atoms/userInfo'

const Toast: React.FC = () => {
  const [showTopToast, setShowTopToast] = useState(true)
  const [time, setTime] = useState('DD:HH:mm:ss')
  const userInfo = useAtomValue(userInfoAtom)

  useEffect(() => {
    const targetTime = new Date('2024-12-16T13:00:00Z').getTime()

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

  return userInfo?.alert_message?.length > 0 ? (
    <ToastContainer showTopToast={showTopToast}>
      {/* <div>Logos Operators Ordinals Mint Is Live</div>
      <a href="https://ordinalsbot.com/mint/logos-operators" target="_blank">
        https://ordinalsbot.com/mint/logos-operators
      </a> */}
      {userInfo.alert_message}
      <div>
        <button className="close-button" onClick={() => setShowTopToast(false)}>
          <img src="/assets/close-orange.svg" alt="close" />
        </button>
      </div>
    </ToastContainer>
  ) : (
    <ToastContainer showTopToast={showTopToast}>
      <>
        Logos Ordinals Mint Begins 16th December, 2024 at 1PM UTC
        <TimeRemaining>Time remaining: {time}</TimeRemaining>
      </>
      <div>
        <button className="close-button" onClick={() => setShowTopToast(false)}>
          <img src="/assets/close-orange.svg" alt="close" />
        </button>
      </div>
    </ToastContainer>
  )
}

const ToastContainer = styled.div<{ showTopToast: boolean }>`
  display: ${({ showTopToast }) => (showTopToast ? 'flex' : 'none')};
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

  a {
    color: #fe740c;
    margin-left: 20px;
  }

  .close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 28px;
    height: 28px;
    border: 1px solid #fe740c;
    background: transparent;
    padding: 0;
  }

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 12px;
    line-height: 16px;

    flex-direction: column;

    a {
      // new line
      display: block;
      margin-left: 0;
    }
  }
`

const TimeRemaining = styled.div`
  margin-left: 20px;
`

export default Toast
