import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

interface SimilarOperatorsProps {}

const operators = [
  {
    id: 1,
    src: '/dashboard/mock/operators/1.gif',
  },
  {
    id: 2,
    src: '/dashboard/mock/operators/2.gif',
  },
  {
    id: 3,
    src: '/dashboard/mock/operators/3.gif',
  },
  {
    id: 4,
    src: '/dashboard/mock/operators/4.gif',
  },
  {
    id: 5,
    src: '/dashboard/mock/operators/5.gif',
  },
  {
    id: 6,
    src: '/dashboard/mock/operators/6.gif',
  },
]

const SimilarOperators: React.FC<SimilarOperatorsProps> = () => {
  return (
    <Container>
      <SectionTitle>Similar Operators</SectionTitle>
      <OperatorGrid>
        {operators.map((operator) => (
          <Link href={`/operators/${operator.id}`} key={operator.id}>
            <OperatorImage
              key={operator.id}
              src={operator.src}
              alt={`Similar Operator ${operator.id}`}
            />
          </Link>
        ))}
      </OperatorGrid>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 72px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const SectionTitle = styled.h2`
  font-size: 28px;
  margin: 0 0 24px 0;
`

const OperatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 16px;
`

// full width, aspect ratio 1 in grid
const OperatorImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  cursor: pointer;
`

export default SimilarOperators
