import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

interface ProgressBarProps {
  progress: number // Current progress of the epoch
  claimPosition: number // Position where "claim period" should appear
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  claimPosition = 60,
}) => {
  const [timeRemaining, setTimeRemaining] = useState<string>('...')

  useEffect(() => {
    const dueDate = new Date('2024-12-31T23:59:59Z')

    const updateRemainingTime = () => {
      const now = new Date()
      const timeDifference = dueDate.getTime() - now.getTime()

      if (timeDifference <= 0) {
        setTimeRemaining('Expired')
        return
      }

      const seconds = Math.floor((timeDifference / 1000) % 60)
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60)
      const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24)
      const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24) % 30
      const months = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 30)

      setTimeRemaining(
        `${months}mo, ${days}days, ${hours}hrs, ${minutes}min, ${seconds}sec`,
      )
    }

    const intervalId = setInterval(updateRemainingTime, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <StyledProgressBar>
      <ProgressHeader>
        <EpochLabel>epoch 1</EpochLabel>
        <EpochInfo>
          <NextEpoch>epoch 2</NextEpoch>
        </EpochInfo>
      </ProgressHeader>
      <ProgressTrack>
        <ProgressFill width={progress} />
        <ClaimPeriodWrapper position={claimPosition}>
          <ClaimPeriod>claim period</ClaimPeriod>
          <VerticalBar />
        </ClaimPeriodWrapper>
      </ProgressTrack>
      <ProgressStats>
        <Stat>Staking Rate: 100%</Stat>
        <Stat>Bonus Reward: 20%</Stat>
      </ProgressStats>
      <ProgressFooter>
        <TimeRemaining>
          <Label>Time Remaining</Label>
          <Value color="#fe740c" backgroundColor="#321504">
            {timeRemaining}
          </Value>
        </TimeRemaining>
        <EarnedReward>
          <Label>Earned Epoch 1</Label>
          <Value color="#F29AE9" backgroundColor="#320430">
            200.12
          </Value>
        </EarnedReward>
      </ProgressFooter>
    </StyledProgressBar>
  )
}

const StyledProgressBar = styled.section`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`

const EpochLabel = styled.span`
  background-color: rgb(var(--lsd-surface-secondary));
  color: rgb(var(--lsd-text-secondary));
  padding: 0 8px;
  line-height: 20px;
  font-size: 14px;
`

const EpochInfo = styled.div`
  display: flex;
  gap: 8px;
`

const NextEpoch = styled.span``

const ProgressTrack = styled.div`
  position: relative;
  height: 8px;
  margin: 14px 0;
  border-bottom: 1px solid rgb(var(--lsd-border-primary));
  border-right: 1px solid rgb(var(--lsd-border-primary));
`

const ProgressFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: rgb(var(--lsd-surface-secondary));
`

const ClaimPeriodWrapper = styled.div<{ position: number }>`
  position: absolute;
  top: -14px;

  left: ${(props) => props.position}%;
  display: flex;
  flex-direction: column;
`

const ClaimPeriod = styled.span`
  background-color: rgb(var(--lsd-surface-secondary));
  color: rgb(var(--lsd-text-secondary));
  padding: 0 8px;
  position: relative;
  top: -8px;
  line-height: 20px;
  font-size: 14px;
`

const VerticalBar = styled.div`
  width: 1px;
  height: 8px;
  background-color: white;
  z-index: 1;
`

const ProgressStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

const Stat = styled.span``

const ProgressFooter = styled.div`
  display: flex;
  gap: 16px;
`

const TimeRemaining = styled.div`
  border: 1px solid #321504;
  display: flex;
  align-items: center;
  gap: 16px;
`

const EarnedReward = styled.div`
  border: 1px solid #320430;
  display: flex;
  align-items: center;
  gap: 16px;
`

const Label = styled.div`
  font-size: 12px;
  padding: 8px 16px;
`

const Value = styled.div<{ color: string; backgroundColor: string }>`
  font-size: 12px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
`

export default ProgressBar
