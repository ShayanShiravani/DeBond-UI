import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { FrameConnector } from '@web3-react/frame-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { chainsMap } from '.'
import { getFormaticKey, getRpcUrls } from 'configs'

const POLLING_INTERVAL = 12000
const RPC_URLS = getRpcUrls()
const supportedChainIds = Object.keys(RPC_URLS).map(Number)

export const injected = new InjectedConnector(
  { supportedChainIds: supportedChainIds}
)

export const walletConnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  supportedChainIds: supportedChainIds,
  qrcode: true
})

export const walletLink = new WalletLinkConnector({
  url: RPC_URLS[chainsMap.ETH],
  appName: 'DeBond',
  supportedChainIds: supportedChainIds
})

export const frame = new FrameConnector({ supportedChainIds: [chainsMap.ETH] })

export const fortmatic = new FortmaticConnector(
  { 
    apiKey:  getFormaticKey(), 
    chainId: chainsMap.ETH
  }
)

export const ConnectorNames: { [name:string]: string } = {
  Injected: 'MetaMask',
  Network: 'Network',
  WalletConnect: 'WalletConnect',
  WalletLink: 'WalletLink',
  Ledger: 'Ledger',
  Trezor: 'Trezor',
  Lattice: 'Lattice',
  Frame: 'Frame',
  Fortmatic: 'Fortmatic',
}

export const connectorsByName: { [name:string]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletConnect,
  [ConnectorNames.WalletLink]: walletLink,
  // [ConnectorNames.Frame]: frame,
  // [ConnectorNames.Fortmatic]: fortmatic
}