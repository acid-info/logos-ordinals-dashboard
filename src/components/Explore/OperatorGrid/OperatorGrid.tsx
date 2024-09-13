import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

interface OperatorGridProps {}

const operatorImages = [
  {
    image: '/dashboard/mock/operators/1.gif',
  },
  {
    image: '/dashboard/mock/operators/2.gif',
  },
  {
    image: '/dashboard/mock/operators/3.gif',
  },
  {
    image: '/dashboard/mock/operators/4.gif',
  },
  {
    image: '/dashboard/mock/operators/5.gif',
  },
  {
    image: '/dashboard/mock/operators/6.gif',
  },
  {
    image: '/dashboard/mock/operators/7.gif',
  },
  {
    image: '/dashboard/mock/operators/1.gif',
  },
  {
    image: '/dashboard/mock/operators/2.gif',
  },
  {
    image: '/dashboard/mock/operators/3.gif',
  },
  {
    image: '/dashboard/mock/operators/4.gif',
  },
  {
    image: '/dashboard/mock/operators/5.gif',
  },
  {
    image: '/dashboard/mock/operators/6.gif',
  },
  {
    image: '/dashboard/mock/operators/7.gif',
  },
  {
    image: '/dashboard/mock/operators/1.gif',
  },
]

const OperatorGrid: React.FC<OperatorGridProps> = () => {
  return (
    <StyledOperatorGrid>
      {operatorImages.map((operator, index) => (
        <Link
          href={`/operators/${index + 1}`}
          key={'explore-operator-' + index}
        >
          <GridItem>
            <img
              key={index}
              src={operator.image}
              alt={`Operator ${index + 1}`}
              loading="lazy"
            />
          </GridItem>
        </Link>
      ))}
    </StyledOperatorGrid>
  )
}

// grid: 6 responsive columns
const StyledOperatorGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  gap: 16px;
  margin-top: 16px;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    aspect-ratio: 1;
    object-fit: contain;
    width: 216px;
  }
`

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export default OperatorGrid
