import {
  AddressPurpose,
  BitcoinNetworkType,
  getAddress,
  signMessage,
} from 'sats-connect'
import { WALLET_SIGN_MESSAGE_REQUEST } from '../../../constants/wallet'

// General BTC provider function for Xverse wallet integration
export const getBtcProvider = () => {
  if ('xverse' in window) {
    const anyWindow: any = window
    if (anyWindow.xverse.bitcoin && anyWindow.xverse.bitcoin.isXverseWallet) {
      return anyWindow.xverse.bitcoin
    }
  }
  return null
}

// Connect to the Xverse wallet
export async function connectXverseWallet() {
  return new Promise((resolve, reject) => {
    getAddress({
      //@ts-ignore
      host: 'yourdomain.com', // Replace with your specific domain or host
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

// Sign a message using the Xverse wallet
export async function signWalletMessage(address: string) {
  return new Promise((resolve, reject) => {
    try {
      signMessage({
        //@ts-ignore
        host: 'yourdomain.com', // Replace with your specific domain or host
        getProvider: getBtcProvider,
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

// Function to get the address and signature from the Xverse wallet
export const getXverseAddressAndSignature = async () => {
  try {
    const wallets: any = await connectXverseWallet()
    const addresses = wallets?.addresses

    if (!addresses || addresses.length === 0) {
      throw new Error('No addresses found')
    }

    const addr = addresses[0]?.address
    const sig = await signWalletMessage(addr)

    return { addr, sig }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get address and signature')
  }
}
