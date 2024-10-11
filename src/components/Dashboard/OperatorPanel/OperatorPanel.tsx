import { Collapse } from '@/components/common/Collapse'
import { breakpoints } from '@/configs/ui.configs'
import { truncateString } from '@/utils/general.utils'
import styled from '@emotion/styled'
import React from 'react'

interface OperatorPanelProps {}

const TEMP_BADGES = [
  {
    id: 1,
    image: '/dashboard/badges/1-year-streak.svg',
  },
  {
    id: 2,
    image: '/dashboard/badges/10-day-streak.svg',
  },
  {
    id: 3,
    image: '/dashboard/badges/100-days-streak.svg',
  },
  {
    id: 4,
    image: '/dashboard/badges/badege-placeholder.svg',
  },
]

const OperatorPanel: React.FC<OperatorPanelProps> = () => {
  return (
    <StyledPanel>
      <Profile>
        <OperatorImage
          src="/dashboard/mock/operators/pinned.gif"
          alt="Operator"
        />
        <OperatorInfo>
          <OperatorType>Quantum Recursive Memetic</OperatorType>
        </OperatorInfo>
      </Profile>

      <InfoRow>
        <Label>Archetype</Label>
        <Value>Memetic</Value>
      </InfoRow>

      <CallSignContainer>
        <InfoRow>
          <Label>Wallet</Label>
          <Value>{truncateString('bc1qaa13nskasjovehs9')}</Value>
          <ActionButton>
            <img src="/assets/file-copy.svg" alt="Copy wallet address" />
          </ActionButton>
        </InfoRow>
        <InfoRow>
          <Label>Callsign</Label>
          <Value>RagingBull</Value>
          <ActionButton>
            <img src="/assets/edit.svg" alt="Edit callsign" />
          </ActionButton>
        </InfoRow>
        <InfoRow>
          <Label>Role</Label>
          <Value>Operator</Value>
        </InfoRow>
        <InfoRow>
          <Label>OP Number</Label>
          <Value>#214</Value>
        </InfoRow>
      </CallSignContainer>

      <ProfileInfo>
        <BadgesSection>
          <BadgeTitle>
            <Label>Badges</Label>
            <BadgeIcon src="/assets/chevron-right.svg" alt="Badge info" />
          </BadgeTitle>
          <BadgeList>
            {TEMP_BADGES.map((badge) => (
              <Badge
                key={badge.id}
                src={badge.image}
                alt={`Badge ${badge.id}`}
              />
            ))}
          </BadgeList>
        </BadgesSection>
      </ProfileInfo>

      <Collapse
        header="Refer Operators +100 XP"
        content={truncateString('445f5slk1as4645sdf54')}
      />
    </StyledPanel>
  )
}

const StyledPanel = styled.section`
  font-size: 14px;
  line-height: 20px;
`

const Profile = styled.div`
  background-color: var(--grey-900);
  padding: 8px;
  margin-bottom: 2px;

  @media (max-width: ${breakpoints.sm}px) {
    display: flex;
    gap: 16px;
  }
`

const OperatorImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;

  @media (max-width: ${breakpoints.sm}px) {
    width: 90px;
  }
`

const OperatorInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 8px;
  margin-bottom: 2px;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    padding: 0;
    margin-bottom: 0;
    align-items: center;
  }
`

const OperatorType = styled.span`
  @media (max-width: ${breakpoints.sm}px) {
    text-align: center;
  }
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
  margin-bottom: 2px;
  background-color: var(--grey-900);
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const CallSignContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 2px;

  @media (max-width: ${breakpoints.sm}px) {
    margin-top: 2px;
  }
`

const Label = styled.span`
  width: 87px;
`

const Value = styled.span`
  text-align: right;
  width: 155px;

  @media (max-width: ${breakpoints.sm}px) {
    width: auto;
  }
`

const BadgesSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-900);
  padding: 16px 8px;
`

const BadgeTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
`

const BadgeIcon = styled.img`
  width: 14px;
  height: 14px;

  margin-left: auto;
`

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const Badge = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 18px;
`

export default OperatorPanel
