import { WALLET_SIGN_MESSAGE_REQUEST } from '../../../constants/wallet'

export const getOKXAddressAndSignature = async () => {
  // Docs: https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider#connect
  const result = await window.okxwallet.bitcoin.connect()
  const addr = result.address

  // Docs: https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider#signmessage
  const sig = await window.okxwallet.bitcoin.signMessage(
    WALLET_SIGN_MESSAGE_REQUEST,
    'bip322-simple',
  )

  return { addr, sig }
}
