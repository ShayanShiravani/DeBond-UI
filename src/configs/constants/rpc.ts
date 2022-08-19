import { flow } from "lodash"
import { getAnkrKey } from ".."
import { getValidChains } from "./chains"
import { chainsMap } from "./chains"

const ankr_key = getAnkrKey()

const CONNECTOR_RPC_URLS: { [chainId: number]: string } = {
  [chainsMap.ETH]: 'https://rpc.ankr.com/eth',
  [chainsMap.ROPSTEN]: 'https://rpc.ankr.com/eth_ropsten',
  [chainsMap.RINKEBY]: 'https://rpc.ankr.com/eth_rinkeby',
  [chainsMap.BSC]: 'https://rpc.ankr.com/bsc',
  [chainsMap.BSC_TESTNET]: 'https://rpc.ankr.com/bsc_testnet_chapel',
  [chainsMap.XDAI]: 'https://rpc.xdaichain.com',
  [chainsMap.SOKOL]: 'https://sokol.poa.network/',
  [chainsMap.FANTOM_TESTNET]: 'https://rpc.ankr.com/fantom_testnet',
  [chainsMap.HECO]: 'https://http-mainnet-node.huobichain.com',
  [chainsMap.HECO_TESTNET]: 'https://http-testnet.hecochain.com',
  [chainsMap.FANTOM]: 'https://rpc.ankr.com/fantom',
  [chainsMap.MATIC]: 'https://rpc.ankr.com/polygon',
  [chainsMap.MATIC_TESTNET]: 'https://rpc.ankr.com/polygon_mumbai',
  [chainsMap.AVAX]: 'https://rpc.ankr.com/avalanche',
  [chainsMap.ARBITRUM]: 'https://rpc.ankr.com/arbitrum',
  [chainsMap.OPTIMISM]: 'https://rpc.ankr.com/optimism'
}

// The RPC urls that used in the app functionality
const APP_RPC_URLS: { [chainId: number]: string[] } = {
  [chainsMap.ETH]: [
    'https://rpc.ankr.com/eth',
    'https://rpc.ankr.com/eth/'+ankr_key
  ],
  [chainsMap.ROPSTEN]: [
    'https://rpc.ankr.com/eth_ropsten',
    'https://rpc.ankr.com/eth_ropsten/'+ankr_key
  ],
  [chainsMap.RINKEBY]: [
    'https://rpc.ankr.com/eth_rinkeby',
    'https://rpc.ankr.com/eth_rinkeby/'+ankr_key
  ],
  [chainsMap.BSC]: [
    'https://rpc.ankr.com/bsc',
    'https://rpc.ankr.com/bsc/'+ankr_key
  ],
  [chainsMap.BSC_TESTNET]: [
    'https://rpc.ankr.com/bsc_testnet_chapel',
    'https://rpc.ankr.com/bsc_testnet_chapel/'+ankr_key
  ],
  [chainsMap.FANTOM]: [
    'https://rpc.ankr.com/fantom',
    'https://rpc.ankr.com/fantom/'+ankr_key
  ],
  [chainsMap.FANTOM_TESTNET]: [
    'https://rpc.ankr.com/fantom_testnet',
    'https://rpc.ankr.com/fantom_testnet/'+ankr_key
  ],
  [chainsMap.MATIC]: [
    'https://rpc.ankr.com/polygon',
    'https://rpc.ankr.com/polygon/'+ankr_key
  ],
  [chainsMap.MATIC_TESTNET]: [
    'https://rpc.ankr.com/polygon_mumbai',
    'https://rpc.ankr.com/polygon_mumbai/'+ankr_key
  ],
  [chainsMap.AVAX]: [
    'https://rpc.ankr.com/avalanche',
    'https://rpc.ankr.com/avalanche/'+ankr_key
  ],
  [chainsMap.ARBITRUM]: [
    'https://rpc.ankr.com/arbitrum',
    'https://rpc.ankr.com/arbitrum/'+ankr_key
  ],
  [chainsMap.OPTIMISM]: [
    'https://rpc.ankr.com/optimism',
    'https://rpc.ankr.com/optimism/'+ankr_key
  ],
  [chainsMap.XDAI]: ['https://rpc.xdaichain.com'],
  [chainsMap.SOKOL]: ['https://sokol.poa.network/'],
  [chainsMap.HECO]: ['https://http-mainnet-node.huobichain.com'],
  [chainsMap.HECO_TESTNET]: ['https://http-testnet.hecochain.com']
}

export const getConnectorRpcUrls = (): {[chainId: number]: string} => {
  const validChains = getValidChains()
  return flow([
    Object.entries,
    (arr: [string, string][]) => arr.filter(([key]) => validChains.includes(+key)),
    Object.fromEntries,
  ])(CONNECTOR_RPC_URLS)
}

export const getAllAppRpcUrl = (): {[chainId: number]: string[]} => {
  const validChains = getValidChains()
  return flow([
    Object.entries,
    (arr: [string, string[]][]) => arr.filter(([key]) => validChains.includes(+key)),
    Object.fromEntries,
  ])(APP_RPC_URLS)
}

export const getAppRpcUrl = (chainId: number): string[] => {
  return APP_RPC_URLS[chainId]
}