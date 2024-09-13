import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

import React from 'react'

interface OperatorDetailsProps {
  id: number
}

const operatorInfo = [
  { trait: 'Inscription ID', value: '84783..ai0' },
  { trait: 'Inscription Number', value: '123987' },
  { trait: 'Owner', value: 'bc1qa...vehs9' },
  { trait: 'Content', value: 'Link' },
  { trait: 'Content Type', value: 'image/png' },
  { trait: 'Created', value: '2/14/2023, 11:01:50 PM' },
  { trait: 'Genesis Transaction', value: '88244...8da' },
  { trait: 'Genesis Transaction BlockHeight', value: '776604' },
  { trait: 'Sat Rarity', value: 'COMMON' },
  { trait: 'Sat Number', value: '1737591324951162' },
  { trait: 'Sat Name', value: 'bnskqioxomx' },
  { trait: 'Sat BlockTime', value: '11/14/2018, 9:52:23 AM' },
  { trait: 'Sat BlockHeight', value: '550073' },
  { trait: 'Location', value: '7133b...1:0' },
  { trait: 'Location BlockHeight', value: 'bc1qa...vehs9' },
  { trait: 'Output', value: '7133b...b:1' },
]

const OperatorDetails: React.FC<OperatorDetailsProps> = ({
  id,
}: OperatorDetailsProps) => {
  const handleDownload = () => {
    window.open(`/dashboard/mock/operators/${id % 7}.gif`, '_blank')
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Logos Operator',
          text: 'Check out this Logos Operator!',
          url: window.location.href,
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      alert('Web Share API is not supported in this browser.')
    }
  }

  return (
    <Container>
      <OperatorImage>
        <img
          src={`/dashboard/mock/operators/${id % 7}.gif`}
          alt={`Operator ${id}`}
          className="operator-img"
        />
        <ActionButtons>
          <Button onClick={handleShare}>Share</Button>
          <Button onClick={handleDownload}>Download</Button>
        </ActionButtons>
      </OperatorImage>
      <OperatorInfo>
        <OperatorTitle>Memetic</OperatorTitle>
        <OperatorSubtitle>
          <span>Operator</span>
          <span className="id">#{id}</span>
        </OperatorSubtitle>
        <AttributesFirstGrid>
          <AttributeItem>
            <AttributeLabel>Count</AttributeLabel>
            <AttributeValue>3</AttributeValue>
          </AttributeItem>
          <AttributeItem>
            <AttributeLabel>Body</AttributeLabel>
            <AttributeValue>Purple</AttributeValue>
          </AttributeItem>
        </AttributesFirstGrid>
        <AttributesSecondGrid>
          <AttributeItem>
            <AttributeLabel>Head</AttributeLabel>
            <AttributeValue>Woodsman</AttributeValue>
          </AttributeItem>
          <AttributeItem>
            <AttributeLabel>Eyes</AttributeLabel>
            <AttributeValue>Patch</AttributeValue>
          </AttributeItem>
          <AttributeItem>
            <AttributeLabel>Earing</AttributeLabel>
            <AttributeValue>None</AttributeValue>
          </AttributeItem>
        </AttributesSecondGrid>
        <ArchetypeSection>
          <span>Archetype</span>
          <span>Memetic</span>
        </ArchetypeSection>
        <DetailsList>
          {operatorInfo.map((info, index) => (
            <DetailItem key={index}>
              <DetailLabel>{info.trait}</DetailLabel>
              <DetailValue>{info.value}</DetailValue>
            </DetailItem>
          ))}
        </DetailsList>
      </OperatorInfo>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 0 16px;
  width: 100%;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 40px;
  }
`

const OperatorImage = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  grid-column: 1 / 13;

  @media (max-width: ${breakpoints.md}px) {
    grid-column: 1 / 2;
  }
`

const OperatorInfo = styled.div`
  grid-column: 15 / 25;

  @media (max-width: ${breakpoints.md}px) {
    grid-column: 1 / 2;
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: -1px;
  margin-top: 16px;

  button:first-of-type {
    border-right: none;
  }
`

const Button = styled.button`
  flex: 1;
  padding: 10px 40px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  font: 400 14px/1 Courier, sans-serif;
  cursor: pointer;
`

const OperatorTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  margin: 0;
`

const OperatorSubtitle = styled.div`
  display: flex;
  gap: 16px;
  font-size: 18px;
  margin-top: 16px;

  .id {
    opacity: 0.5;
  }
`

const AttributesFirstGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  margin-top: 24px;
`

const AttributesSecondGrid = styled(AttributesFirstGrid)`
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2px;
`

const AttributeItem = styled.div`
  background-color: var(--dark-orange);
  padding: 16px 8px;
`

const AttributeLabel = styled.div`
  font-size: 14px;
  color: var(--orange);
`

const AttributeValue = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: var(--orange);
`

const ArchetypeSection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--grey-900);
  padding: 16px 8px;
  margin-top: 24px;
`

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 24px;
`

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--grey-900);
  padding: 16px 8px;
`

const DetailLabel = styled.span`
  font-size: 14px;
`

const DetailValue = styled.span`
  font-size: 14px;
`

export default OperatorDetails
