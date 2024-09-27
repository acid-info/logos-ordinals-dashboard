import styled from '@emotion/styled'

const CustomCheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
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
  border: 2px solid white;
  position: relative;
  margin-right: 10px;

  &::after {
    content: ${({ isChecked }) => (isChecked ? "'✓'" : "''")};
    color: black;
    position: absolute;
    top: 0;
    left: 3px;
    font-size: 14px;
  }
`

const LabelText = styled.span`
  color: white;
`

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
  <CustomCheckboxWrapper>
    <HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
    <StyledCheckbox isChecked={checked} />
    <LabelText>{label}</LabelText>
  </CustomCheckboxWrapper>
)

export default Checkbox
