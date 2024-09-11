import styled from '@emotion/styled'
import React from 'react'

interface OperatorPanelProps {}

const TEMP_BADGES = [
  {
    id: 1,
    image: '/dashboard/badges/badge-1.svg',
  },
  {
    id: 2,
    image: '/dashboard/badges/badge-2.svg',
  },
  {
    id: 3,
    image: '/dashboard/badges/badge-3.svg',
  },
  {
    id: 4,
    image: '/dashboard/badges/badge-4.svg',
  },
  {
    id: 5,
    image: '/dashboard/badges/badge-5.svg',
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
          <OperatorType>Operator</OperatorType>
          <OperatorName>Memetic #1234</OperatorName>
        </OperatorInfo>
      </Profile>
      <InfoRow>
        <Label>Archetype</Label>
        <Value>Memetic</Value>
      </InfoRow>

      <CallSignContainer>
        <InfoRow>
          <Label>Callsign</Label>
          <Value>RagingBull</Value>
        </InfoRow>
      </CallSignContainer>

      <ProfileInfo>
        <InfoRow>
          <Label>OP Number</Label>
          <Value>#214</Value>
        </InfoRow>
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
    </StyledPanel>
  )
}

const StyledPanel = styled.section`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const OperatorImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`

const OperatorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
  margin-bottom: 2px;
`

const OperatorType = styled.span``

const OperatorName = styled.span``

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
  background-color: var(--grey-900);
`

const Profile = styled.div`
  background-color: var(--grey-900);
  padding: 8px;
  margin-bottom: 2px;
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const CallSignContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 2px;
`

const Label = styled.span``

const Value = styled.span`
  text-align: right;
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
  gap: 8px;
`

const Badge = styled.img`
  width: 45px;
  height: 42px;
  object-fit: contain;
  cursor: pointer;
`

export default OperatorPanel
