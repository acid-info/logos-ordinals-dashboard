import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useAtomValue } from 'jotai'
import 'lazysizes'
import React from 'react'
import { degenModeAtom } from '../../../../atoms/degenMode'
import operators from '../../../../data/operators.json'
import { findOperatorById, processOperators } from '../../../../utils/operators'
import DownloadDropdown from './DownloadDropdown'

interface OperatorDetailsProps {
  id: number
}

// const operatorInfo = [
//   { trait: 'Inscription ID', value: '84783..ai0' },
//   { trait: 'Inscription Number', value: '123987' },
//   { trait: 'Owner', value: 'bc1qa...vehs9' },
//   { trait: 'Content', value: 'Link' },
//   { trait: 'Content Type', value: 'image/png' },
//   { trait: 'Created', value: '2/14/2023, 11:01:50 PM' },
//   { trait: 'Genesis Transaction', value: '88244...8da' },
//   { trait: 'Genesis Transaction BlockHeight', value: '776604' },
//   { trait: 'Sat Rarity', value: 'COMMON' },
//   { trait: 'Sat Number', value: '1737591324951162' },
//   { trait: 'Sat Name', value: 'bnskqioxomx' },
//   { trait: 'Sat BlockTime', value: '11/14/2018, 9:52:23 AM' },
//   { trait: 'Sat BlockHeight', value: '550073' },
//   { trait: 'Location', value: '7133b...1:0' },
//   { trait: 'Location BlockHeight', value: 'bc1qa...vehs9' },
//   { trait: 'Output', value: '7133b...b:1' },
// ]

const OperatorDetails: React.FC<OperatorDetailsProps> = ({
  id,
}: OperatorDetailsProps) => {
  // const router = useRouter()
  const isDegenMode = useAtomValue(degenModeAtom)

  const processedOperators = processOperators(operators as any, [])
  // const isIncripted = false

  const operator = findOperatorById(processedOperators, id)

  // const handleShare = async () => {
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: 'Logos Operator',
  //         text: 'Check out this Logos Operator!',
  //         url: window.location.href,
  //       })
  //     } catch (error) {
  //       console.error('Error sharing:', error)
  //     }
  //   } else {
  //     alert('Web Share API is not supported in this browser.')
  //   }
  // }

  const handleShare = () => {
    const text = encodeURIComponent(
      `${operator?.name} has chosen to EXIT.\n\nJoin me and explore the collection at https://dashboard.logos.co`,
    )

    const twitterUrl = `https://x.com/intent/post?text=${text}`

    // Open a new window with specific dimensions
    window.open(
      twitterUrl,
      'Share on X',
      'width=600,height=400,scrollbars=yes,resizable=yes',
    )
  }

  return (
    <Container>
      <OperatorImage>
        <img
          src={isDegenMode ? operator?.pixelated : operator?.image_400}
          data-src={isDegenMode ? operator?.pixelated : operator?.gif_400}
          alt={`Operator ${id}`}
          loading="lazy"
          className="lazyload"
        />
        <ActionButtons>
          <Button onClick={handleShare}>Share</Button>
          <DownloadDropdown operator={operator} />
        </ActionButtons>
      </OperatorImage>
      <OperatorInfo>
        <OperatorTitle>{operator?.name}</OperatorTitle>
        <ArchetypeSection>
          <span>Archetype</span>
          <span>{operator?.archetype}</span>
        </ArchetypeSection>
        {/* <OperatorSubtitle>
          <span>Operator</span>
          <span className="id">#{id}</span>
        </OperatorSubtitle> */}
        <AttributesFirstGrid>
          <AttributeItem>
            <AttributeLabel>Comp</AttributeLabel>
            <AttributeValue>{operator?.comp}</AttributeValue>
          </AttributeItem>
          <AttributeItem>
            <AttributeLabel>Background</AttributeLabel>
            <AttributeValue>{operator?.background}</AttributeValue>
          </AttributeItem>
        </AttributesFirstGrid>
        <AttributesFirstGrid>
          <AttributeItem>
            <AttributeLabel>Helmet</AttributeLabel>
            <AttributeValue>{operator?.helmet}</AttributeValue>
          </AttributeItem>
          <AttributeItem>
            <AttributeLabel>Jacket</AttributeLabel>
            <AttributeValue>{operator?.jacket}</AttributeValue>
          </AttributeItem>
        </AttributesFirstGrid>
        <AttributesFullGrid>
          <AttributeItem>
            <AttributeLabel>Skin</AttributeLabel>
            <AttributeValue>{operator?.skin}</AttributeValue>
          </AttributeItem>
        </AttributesFullGrid>

        {/* <DetailsList>
          {isIncripted &&
            operatorInfo.map((info, index) => (
              <DetailItem key={index}>
                <DetailLabel>{info.trait}</DetailLabel>
                <DetailValue>{info.value}</DetailValue>
              </DetailItem>
            ))}
        </DetailsList> */}
      </OperatorInfo>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 0 16px;
  width: 100%;

  @media (max-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const OperatorImage = styled.div`
  position: relative;

  & > img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  grid-column: 1 / 13;

  @media (max-width: ${breakpoints.sm}px) {
    grid-column: 1 / 2;
  }
`

const OperatorInfo = styled.div`
  grid-column: 15 / 25;

  @media (max-width: ${breakpoints.sm}px) {
    grid-column: 1 / 2;
  }
`

const ActionButtons = styled.div`
  display: flex;
  margin-top: 16px;

  width: 100%;

  & > * {
    flex: 1;
  }

  * > button:first-of-type {
    border-right: none;
  }
`

const Button = styled.button`
  flex: 1;
  height: 40px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`

const OperatorTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  margin: 0;

  @media (max-width: ${breakpoints.sm}px) {
    margin-top: 48px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;
  }
`

// const OperatorSubtitle = styled.div`
//   display: flex;
//   gap: 16px;
//   font-size: 18px;
//   margin-top: 16px;

//   .id {
//     opacity: 0.5;
//   }
// `

const AttributesFirstGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  margin-top: 2px;
`

const AttributesFullGrid = styled(AttributesFirstGrid)`
  grid-template-columns: 1fr;
  margin-top: 2px;
`

const AttributeItem = styled.div`
  background-color: #320430;
  padding: 16px 8px;
`

const AttributeLabel = styled.div`
  font-size: 14px;
  color: #f29ae9;
`

const AttributeValue = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #f29ae9;
`

const ArchetypeSection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--grey-900);
  padding: 16px 8px;
  margin-top: 24px;
  margin-bottom: 24px;

  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.14px;

  @media (max-width: ${breakpoints.sm}px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`

// const DetailsList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2px;
//   margin-top: 24px;
// `

// const DetailItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   background-color: var(--grey-900);
//   padding: 16px 8px;
// `

// const DetailLabel = styled.span`
//   font-size: 14px;
// `

// const DetailValue = styled.span`
//   font-size: 14px;
// `

export default OperatorDetails
