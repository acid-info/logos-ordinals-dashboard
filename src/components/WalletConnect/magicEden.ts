import {
  AddressPurpose,
  BitcoinNetworkType,
  getAddress,
  signMessage,
} from 'sats-connect'
import { WALLET_SIGN_MESSAGE_REQUEST } from '../../../constants/wallet'

// Docs: https://docs-wallet.magiceden.io/bitcoin/detecting-the-provider
export const getBtcProvider = () => {
  if ('magicEden' in window) {
    const anyWindow: any = window
    if (anyWindow.magicEden.bitcoin && anyWindow.magicEden.bitcoin.isMagicEden)
      return anyWindow.magicEden.bitcoin
  }
}

// Docs: https://docs-wallet.magiceden.io/bitcoin/connecting-to-the-wallet
export async function connectMEWallet() {
  return new Promise((resolve, reject) => {
    getAddress({
      getProvider: getBtcProvider,
      payload: {
        purposes: [AddressPurpose.Ordinals],
        message: 'Select a Bitcoin address to connect with.',
        network: {
          type: BitcoinNetworkType.Mainnet,
        },
      },
      onFinish: (response) => {
        resolve(response)
      },
      onCancel: () => {
        alert('Request canceled')
        reject(new Error('Request canceled'))
      },
    })
  })
}

// Docs: https://docs-wallet.magiceden.io/bitcoin/signing-a-message
export async function signWalletMessage(address: string) {
  return new Promise((resolve, reject) => {
    try {
      signMessage({
        payload: {
          network: {
            type: BitcoinNetworkType.Mainnet,
          },
          address: address,
          message: WALLET_SIGN_MESSAGE_REQUEST,
        },
        onFinish: (response) => {
          resolve(response)
        },
        onCancel: () => {
          alert('Request canceled')

          reject(new Error('Request canceled'))
        },
      })
    } catch (err) {
      console.log(err)
      reject(err)
    }
  })
}

export const getMEAddressAndSignature = async () => {
  try {
    const wallets: any = await connectMEWallet()
    const addresses = wallets?.addresses

    const addr = addresses[0]?.address
    const sig = await signWalletMessage(addr)

    return { addr, sig }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get address and signature')
  }
}
