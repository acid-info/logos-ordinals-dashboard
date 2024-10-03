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
    <StyledCheckbox isChecked={checked}>
      {checked && <img src="/assets/check.svg" alt="checkmark" />}
    </StyledCheckbox>
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
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 18px;
  height: 18px;
  background-color: ${({ isChecked }) => (isChecked ? 'white' : 'black')};
  position: relative;
  margin-right: 10px;
`

const LabelText = styled.span`
  color: white;
  font-size: 12px;
  line-height: 16px;
`

export default Checkbox
