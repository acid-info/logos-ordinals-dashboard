import { breakpoints } from '@/configs/ui.configs'
import { ProcessedOperator } from '@/containers/Dashboard/DashboardContainer'
import styled from '@emotion/styled'
import 'lazysizes'
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
              href={`/operators/${operator.id}`}
              key={'explore-operator-' + index}
            >
              <GridItem ref={lastElementRef}>
                <img
                  key={index}
                  src={operator.image}
                  data-src={operator.gif}
                  alt={`Operator ${index + 1}`}
                  loading="lazy"
                  className="lazyload"
                />
              </GridItem>
            </Link>
          )
        } else {
          return (
            <Link
              href={`/operators/${operator.id}`}
              key={'explore-operator-' + index}
            >
              <GridItem>
                <img
                  key={index}
                  src={operator.image}
                  data-src={operator.gif}
                  alt={`Operator ${index + 1}`}
                  loading="lazy"
                  className="lazyload"
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

  img {
    aspect-ratio: 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--grey-900);
`

const Placeholder = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--grey-900);
  opacity: 0.5;
`

export default OperatorGrid
