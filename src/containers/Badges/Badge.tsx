import styled from '@emotion/styled'

type Props = {
  src: string
  label: string
}

const Badge = ({ src, label }: Props) => {
  return (
    <Container>
      <img src={src} alt={label} />
      <p>{label}</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  p {
    font-size: 14px;
    line-height: 20px;
  }
`

export default Badge
