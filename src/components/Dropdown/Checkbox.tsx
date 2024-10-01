import styled from '@emotion/styled'

interface CustomCheckboxProps {
  checked: boolean
  onChange: () => void
  label: string
}

const Checkbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
}) => (
  <Container>
    <HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
    <StyledCheckbox isChecked={checked} />
    <LabelText>{label}</LabelText>
  </Container>
)

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 16px 10px 11px;
  border-bottom: 1px solid white;

  &:last-of-type {
    border-bottom: none;
  }
`

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
`

const StyledCheckbox = styled.span<{ isChecked: boolean }>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${({ isChecked }) => (isChecked ? 'white' : 'black')};
  border: 1px solid white;
  position: relative;
  margin-right: 10px;

  &::after {
    content: ${({ isChecked }) => (isChecked ? "'✓'" : "''")};
    color: black;
    position: absolute;
    top: -2px;
    left: 2px;
    font-size: 14px;
  }
`

const LabelText = styled.span`
  color: white;
`

export default Checkbox
