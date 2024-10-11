import { numberWithCommas } from '@/utils/general.utils'
import styled from '@emotion/styled'
import React from 'react'

interface ProgressBarProps {
  progress: number // Current progress of the epoch
  claimPosition: number // Position from the right where the claim xp tag should be placed
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  claimPosition = 76,
}) => {
  return (
    <Container>
      <ProgressHeader>
        <EpochLabel>epoch 1</EpochLabel>
        <NextEpoch>epoch 2</NextEpoch>
      </ProgressHeader>
      <ProgressRow>
        <ProgressTrack>
          <ProgressFill width={progress} />
          <ClaimPeriodWrapper>
            <ClaimPeriod position={claimPosition}>claim xp</ClaimPeriod>
            <VerticalBar />
          </ClaimPeriodWrapper>
        </ProgressTrack>
        <Epoch2Wrapper>
          <EpochBars>
            {[...Array(22)].map((_, index) => (
              <EpochBar key={index} />
            ))}
          </EpochBars>
        </Epoch2Wrapper>
      </ProgressRow>
      <ProgressStats>
        <Stat>Current Rate: 100%</Stat>
        <Stat>XP Bonus: +20%</Stat>
      </ProgressStats>
      <ProgressFooter>
        <TimeRemaining>
          <Label>Time Remaining</Label>
          <Value color="var(--orange)" backgroundColor="var(--dark-orange)">
            {`${numberWithCommas(1026)} blocks`}
          </Value>
        </TimeRemaining>
        <PointsRow>
          <EarnedReward>
            <Label>Total Points</Label>
            <Value color="#F29AE9" backgroundColor="#320430">
              {`${numberWithCommas(40278)}`}
            </Value>
          </EarnedReward>
          <EarnedReward>
            <Label>Epoch 1 XP</Label>
            <Value color="#F29AE9" backgroundColor="#320430">
              {`${numberWithCommas(5020)}`}
            </Value>
          </EarnedReward>
        </PointsRow>
      </ProgressFooter>
    </Container>
  )
}

const Container = styled.section`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const ProgressRow = styled.div`
  display: flex;
  gap: 8px;

  align-items: baseline;
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
  width: 72px;
  text-align: center;
`

const NextEpoch = styled.span`
  width: 76px;
  background-color: rgb(var(--lsd-surface-secondary));
  color: rgb(var(--lsd-text-secondary));
  text-align: center;
  padding: 0 8px;
`

const ProgressTrack = styled.div`
  position: relative;
  height: 8px;
  margin: 16px 0;
  width: calc(100% - 83px);
  border-bottom: 1px solid rgb(var(--lsd-border-primary));
  border-right: 1px solid rgb(var(--lsd-border-primary));
  display: flex;
  align-items: center;
`

const ProgressFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: rgb(var(--lsd-surface-secondary));
`

const ClaimPeriodWrapper = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  display: flex;
  flex-direction: column;
`

const ClaimPeriod = styled.span<{ position: number }>`
  background-color: rgb(var(--lsd-surface-secondary));
  color: rgb(var(--lsd-text-secondary));
  padding: 0 8px;
  position: relative;
  line-height: 20px;
  font-size: 14px;
  width: ${(props) => props.position}px;
  text-align: center;
  top: -16px;
`

const VerticalBar = styled.div`
  width: 1px;
  height: 8px;
  background-color: white;
  position: absolute;
  bottom: -8px; /* Align vertical bar at the bottom of progress bar */
`

const Epoch2Wrapper = styled.div`
  margin-left: auto;
  width: 76px;
  display: flex;
  flex-direction: column;
`

const EpochBars = styled.div`
  display: flex;
  gap: 2.75px;
`

// vertical bar, 1px width 6px height, white => inside EpochBars
const EpochBar = styled.div`
  width: 1px;
  height: 6px;
  background-color: white;
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
  border: 1px solid var(--dark-orange);
  display: flex;
  align-items: center;
`

const EarnedReward = styled.div`
  border: 1px solid #320430;
  display: flex;
  align-items: center;
`

const Label = styled.div`
  font-size: 12px;
  padding: 8px 16px;
  line-height: 16px;
`

const Value = styled.div<{ color: string; backgroundColor: string }>`
  font-size: 12px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
  line-height: 16px;
  letter-spacing: 0.12px;
`

const PointsRow = styled.div`
  display: flex;
`

export default ProgressBar
