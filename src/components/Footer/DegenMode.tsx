import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { degenModeAtom } from '../../../atoms/degenMode'

type SwitchProps = {
  isOn: boolean
}

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  width: fit-content;
  height: 48px;
  background: rgba(20, 20, 20, 0.81);
  gap: 16px;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.12px;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    justify-content: space-between;
  }
`

const Label = styled.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.12px;
`

const Switch = styled.div<SwitchProps>`
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;

  /* Grey line background */
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #888888;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
  }

  /* White square */
  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #ffffff;
    left: ${(props) => (props.isOn ? '16px' : '0px')};
    transition: left 0.3s;
    z-index: 1;
  }
`

const DegenMode: React.FC = () => {
  const [isOn, setIsOn] = useAtom(degenModeAtom)

  const handleToggle = () => {
    setIsOn((prevState) => !prevState)
  }

  return (
    <ToggleContainer onClick={handleToggle}>
      <Label>Degen Mode</Label>
      <Switch isOn={isOn} />
    </ToggleContainer>
  )
}

export default DegenMode
