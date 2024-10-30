import { WALLET_SIGN_MESSAGE_REQUEST } from '../../../constants/wallet'

// Docs: https://docs.phantom.app/bitcoin/detecting-the-provider
export const getPhantomProvider = () => {
  if ('phantom' in window) {
    const anyWindow: any = window
    const provider = anyWindow.phantom?.bitcoin

    if (provider && provider.isPhantom) {
      return provider
    }
  }
}

export function bytesToBase64(bytes: any) {
  const binString = String.fromCodePoint(...bytes)
  return btoa(binString)
}

export const getPhantomAddressAndSignature = async () => {
  try {
    const phantomProvider = await getPhantomProvider()
    const accounts = await phantomProvider?.requestAccounts()

    const addr = accounts[0]?.address

    const message = new TextEncoder().encode(WALLET_SIGN_MESSAGE_REQUEST)

    // Docs: https://docs.phantom.app/bitcoin/signing-a-message
    const response = await phantomProvider.signMessage(addr, message)

    const sig = bytesToBase64(response.signature)

    return { addr, sig }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get address and signature')
  }
}
