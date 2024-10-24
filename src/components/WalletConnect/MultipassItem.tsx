import styled from '@emotion/styled'

const Multipass = () => {
  return (
    <div>
      <WalletName>
        <img src="/assets/chevron-left.svg" alt="Multipass" />
        Multipass
      </WalletName>
      <QRCodeContainer>
        <p>Scan to connect</p>
        <img src="/assets/qr-multipass.png" alt="Multipass QR code" />
      </QRCodeContainer>
    </div>
  )
}

const WalletName = styled.div`
  font-size: 12px;
  line-height: 16px;
  border-bottom: 1px solid rgb(var(--lsd-border-primary));
  display: flex;
  padding: 6px 10px 6px 12px;
  align-items: center;
  align-self: stretch;
  cursor: pointer;
  gap: 12px;

  &:last-of-type {
    border-bottom: none;
  }
`

const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;

  p {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 12px;
  }
`

export default Multipass
