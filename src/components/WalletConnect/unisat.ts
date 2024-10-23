import { WALLET_SIGN_MESSAGE_REQUEST } from '../../../constants/wallet'

export const getUnisatAddressAndSignature = async () => {
  // Docs: https://docs.unisat.io/dev/unisat-developer-center/unisat-wallet#getaccounts
  const accounts = await window.unisat.getAccounts()
  const addr = accounts[0]

  // Docs: https://docs.unisat.io/dev/unisat-developer-center/unisat-wallet#signmessage
  const sig = await window.unisat.signMessage(
    WALLET_SIGN_MESSAGE_REQUEST,
    'bip322-simple',
  )

  return { addr, sig }
}
