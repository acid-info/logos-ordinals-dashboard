import styled from '@emotion/styled'
import React from 'react'

const operatorImages = [
  '/dashboard/mock/operators/1.gif',
  '/dashboard/mock/operators/2.gif',
  '/dashboard/mock/operators/3.gif',
  '/dashboard/mock/operators/4.gif',
  '/dashboard/mock/operators/5.gif',
  '/dashboard/mock/operators/6.gif',
  '/dashboard/mock/operators/7.gif',
  '/dashboard/mock/operators/8.gif',
]

const OperatorGallery: React.FC = () => {
  return (
    <GalleryWrapper>
      {operatorImages.map((src, index) => (
        <GridItem key={index}>
          <OperatorImage
            src={src}
            alt={`Operator ${index + 1}`}
            loading="lazy"
          />
        </GridItem>
      ))}
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.section`
  position: absolute;
  bottom: 0;
  overflow-x: auto;
  width: 100%;
  display: flex;
  gap: 0 16px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const OperatorImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  min-width: 256px;
  width: 18vw;
`

const GridItem = styled.div`
  display: flex;
  width: 100%;
`

export default OperatorGallery
