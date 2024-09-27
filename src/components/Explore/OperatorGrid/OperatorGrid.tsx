import { breakpoints } from '@/configs/ui.configs'
import { ProcessedOperator } from '@/containers/Dashboard/DashboardContainer'
import styled from '@emotion/styled'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'

interface OperatorGridProps {
  isLoading: boolean
  data: ProcessedOperator[]
}

const OFFSET = 18

const OperatorGrid: React.FC<OperatorGridProps> = ({ data, isLoading }) => {
  const [itemsCount, setItemsCount] = useState(18)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const lastElementRef = useRef<HTMLDivElement | null>(null)

  // Infinite scroll logic
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (target.isIntersecting && itemsCount < data.length) {
        setItemsCount((prevCount) => prevCount + OFFSET)
      }
    },
    [itemsCount, data?.length],
  )

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    })

    if (lastElementRef.current)
      observerRef.current.observe(lastElementRef.current)

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [handleObserver])

  return isLoading ? (
    <GridContainer>
      {Array.from({ length: 12 }).map((_, index) => (
        <GridItem key={index}>
          <Placeholder />
        </GridItem>
      ))}
    </GridContainer>
  ) : (
    <GridContainer>
      {data.slice(0, itemsCount).map((operator, index) => {
        if (index === itemsCount - 1) {
          return (
            <Link
              href={`/operators/${index + 1}`}
              key={'explore-operator-' + index}
            >
              <GridItem ref={lastElementRef}>
                <img
                  key={index}
                  src={operator.image}
                  alt={`Operator ${index + 1}`}
                  loading="lazy"
                />
              </GridItem>
            </Link>
          )
        } else {
          return (
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
          )
        }
      })}
    </GridContainer>
  )
}

const GridContainer = styled.section`
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

const Placeholder = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--grey-900);
  border-radius: 8px;
  opacity: 0.5;
`

export default OperatorGrid
