import styled from '@emotion/styled'
import { Epoch } from '../../../../atoms/epochs'

interface Prop {
  currentEpoch: Epoch
}

const ProgressModal = ({ currentEpoch }: Prop) => {
  return (
    <Container>
      <div className="name">{currentEpoch.name}</div>
      <div>Start Block: {currentEpoch.starting_block_number}</div>
      <div>End Block: {currentEpoch.ending_block_number}</div>
      <div>Remaining: {currentEpoch.est_time_remaining}</div>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  bottom: 24px;
  left: 100px;
  width: fit-content;
  padding: 16px;
  background-color: black;
  border: 1px solid white;
  font-size: 12px;
  line-height: 16px;

  .name {
    text-transform: capitalize;
  }
`

export default ProgressModal
