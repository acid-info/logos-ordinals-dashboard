import styled from '@emotion/styled'
import Link from 'next/link'
import React, { useState } from 'react'
import { useStakeOperator } from '../../../../apis/operators/useStakeOperator'
import { useUnstakeOperator } from '../../../../apis/operators/useUnstakeOperator'
import { ProcessedOperator } from '../../../../types/operators'

interface OperatorCardProps {
  operator: ProcessedOperator
}

const OperatorCard: React.FC<OperatorCardProps> = ({
  operator,
}: OperatorCardProps) => {
  const [isStaked, setIsStaked] = useState(operator.isStaked)

  const stake = useStakeOperator()
  const unstake = useUnstakeOperator()

  const handleStake = (operatorId: string) => {
    if (isStaked) {
      unstake.mutate({
        operator_id: operatorId,
        setIsStaked,
      })
    } else {
      stake.mutate({
        operator_id: operatorId,
        setIsStaked,
      })
    }
  }

  return (
    <Container key={operator.id}>
      <Link href={`/operators/${operator.id}`} key={operator.id}>
        <OperatorImage src={operator.image} alt={operator.name} />
      </Link>
      <OperatorInfo>
        <OperatorName>{operator.name}</OperatorName>
        <PointsPerHour>
          <Label>XP/Block</Label>
          <Value>{operator.pointsPerHour} XP</Value>
        </PointsPerHour>
      </OperatorInfo>
      <Actions>
        <ActionButton
          onClick={() => handleStake(operator.id)}
          isStaked={!!isStaked}
        >
          {isStaked ? 'Unstake' : 'Stake'}
        </ActionButton>
        <IconButton>
          {operator.isPinned ? (
            <img src="/assets/pinned.svg" alt="Pinned" />
          ) : (
            <img src="/assets/unpinned.svg" alt="Unpinned" />
          )}
        </IconButton>
      </Actions>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: rgb(var(--lsd-text-primary));

  a {
    display: flex;
  }
`

const IconButton = styled.button`
  background-color: transparent;
  border-left: none;
  width: 28px;
  height: 28px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-left: 1px solid rgb(var(--lsd-border-primary));
  height: 28px;

  cursor: pointer;
`

const Label = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

const Value = styled.div`
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
  padding: 16px 0;
`

const OperatorName = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  // 1 line of text
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
  -webkit-line-clamp: 1;
`

const PointsPerHour = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(var(--lsd-border-primary));
  border-radius: 0;
`

const ActionButton = styled.button<{ isStaked: boolean }>`
  flex: 1;
  background-color: ${(props) =>
    props.isStaked ? 'rgb(var(--lsd-surface-secondary))' : 'transparent'};
  color: ${(props) =>
    props.isStaked
      ? 'rgb(var(--lsd-text-secondary))'
      : 'rgb(var(--lsd-text-primary))'};
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 12px;

  &:hover {
    background-color: rgb(var(--lsd-surface-secondary));
    color: rgb(var(--lsd-text-secondary));
  }

  cursor: pointer;
`

export default OperatorCard
