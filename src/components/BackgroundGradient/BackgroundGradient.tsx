import styled from '@emotion/styled'

const BackgroundGradient = () => {
  return <Gradient></Gradient>
}

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: calc(100vh - 48px);
  height: 100%;
  z-index: 0;

  background: var(
    --g-01,
    linear-gradient(
      142deg,
      #000 66.1%,
      #320430 80.9%,
      #5c75af 96.06%,
      #b56dd4 101.11%
    )
  );
`

export default BackgroundGradient
