import { getAppMode } from ".."

export const chainsMap: {[name:string]:number} = {
  ETH: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  BSC: 56,
  BSC_TESTNET: 97,
  MATIC: 137,
  MATIC_TESTNET: 80001,
  XDAI: 100,
  SOKOL: 77,
  FANTOM: 250,
  FANTOM_TESTNET: 4002,
  HECO: 128,
  HECO_TESTNET: 256,
  AVAX: 43114,
  ARBITRUM: 42161,
  OPTIMISM: 10
}

export const NameChainMap: {[id: number]:string} = {
  [chainsMap.ETH]: 'ETH',
  [chainsMap.ROPSTEN]: 'Ropsten',
  [chainsMap.RINKEBY]: 'Rinkeby',
  [chainsMap.BSC]: 'BSC',
  [chainsMap.BSC_TESTNET]: 'BSC TEST',
  [chainsMap.MATIC]: 'MATIC',
  [chainsMap.MATIC_TESTNET]: 'Mumbai',
  [chainsMap.XDAI]: 'xDAI',
  [chainsMap.SOKOL]: 'Sokol',
  [chainsMap.FANTOM]: 'FTM',
  [chainsMap.FANTOM_TESTNET]: 'FTM TEST',
  [chainsMap.HECO]: 'HECO',
  [chainsMap.HECO_TESTNET]: 'HECOT',
  [chainsMap.AVAX]: 'AVAX',
  [chainsMap.ARBITRUM]: 'ARBITRUM',
  [chainsMap.OPTIMISM]: 'OPTIMISM'
}

export interface ChainParamType {
  name: string,
  symbol: string,
  currency: string,
  decimal: number,
  iconPath: string,
  keyName: string // Used to interaction with Muon app
}

// Chains params used in the app functionality
export const ChainsParams: { [chainId: number]: ChainParamType } = {
  [chainsMap.ETH]: {
    name: 'Ethereum',
    symbol: 'ETH',
    currency: 'ETH',
    decimal: 18,
    iconPath: './images/chains/eth.svg',
    keyName: 'eth'
  },
  [chainsMap.ROPSTEN]: {
    name: 'Ropsten',
    symbol: 'ETH',
    currency: 'ETH',
    decimal: 18,
    iconPath: './images/chains/eth.svg',
    keyName: 'ropsten'
  },
  [chainsMap.RINKEBY]: {
    name: 'Rinkeby',
    symbol: 'ETH',
    currency: 'ETH',
    decimal: 18,
    iconPath: './images/chains/eth.svg',
    keyName: 'rinkeby'
  },
  [chainsMap.BSC]: {
    name: 'BSC',
    symbol: 'BSC',
    currency: 'BNB',
    decimal: 18,
    iconPath: './images/chains/bsc.svg',
    keyName: 'bsc'
  },
  [chainsMap.BSC_TESTNET]: {
    name: 'BSC Testnet',
    symbol: 'BSC TEST',
    currency: 'BNB',
    decimal: 18,
    iconPath: './images/chains/bsc.svg',
    keyName: 'bsc_testnet'
  },
  [chainsMap.MATIC]: {
    name: 'Polygon',
    symbol: 'MATIC',
    currency: 'MATIC',
    decimal: 18,
    iconPath: './images/chains/matic.svg',
    keyName: 'matic'
  },
  [chainsMap.MATIC_TESTNET]: {
    name: 'Mumbai',
    symbol: 'MUMBAI',
    currency: 'MATIC',
    decimal: 18,
    iconPath: './images/chains/matic.svg',
    keyName: 'mumbai'
  },
  [chainsMap.XDAI]: {
    name: 'xDAI',
    symbol: 'xDAI',
    currency: 'xDAI',
    decimal: 18,
    iconPath: '',
    keyName: 'xdai'
  },
  [chainsMap.SOKOL]: {
    name: 'Sokol',
    symbol: 'xDAI',
    currency: 'xDAI',
    decimal: 18,
    iconPath: '',
    keyName: 'xdai_testnet'
  },
  [chainsMap.FANTOM]: {
    name: 'Fantom',
    symbol: 'FTM',
    currency: 'FTM',
    decimal: 18,
    iconPath: './images/chains/ftm.svg',
    keyName: 'ftm'
  },
  [chainsMap.FANTOM_TESTNET]: {
    name: 'Fantom Testnet',
    symbol: 'FTM TEST',
    currency: 'FTM',
    decimal: 18,
    iconPath: './images/chains/ftm.svg',
    keyName: 'ftm_testnet'
  },
  [chainsMap.HECO]: {
    name: 'Huobi ECO',
    symbol: 'HECO',
    currency: 'HECO',
    decimal: 18,
    iconPath: '',
    keyName: 'heco'
  },
  [chainsMap.HECO_TESTNET]: {
    name: 'Huobi ECO Testnet',
    symbol: 'HECOT',
    currency: 'HECO',
    decimal: 18,
    iconPath: '',
    keyName: 'heco_testnet'
  },
  [chainsMap.AVAX]: {
    name: 'Avalanche',
    symbol: 'AVAX',
    currency: 'AVAX',
    decimal: 18,
    iconPath: './images/chains/avax.svg',
    keyName: 'avax'
  },
  [chainsMap.ARBITRUM]: {
    name: 'Arbitrum',
    symbol: 'ARBITRUM',
    currency: 'ARBI',
    decimal: 18,
    iconPath: './images/chains/arbitrum.svg',
    keyName: 'arbitrum'
  },
  [chainsMap.OPTIMISM]: {
    name: 'Optimisim',
    symbol: 'OPTIMISM',
    currency: 'OP',
    decimal: 18,
    iconPath: './images/chains/op.svg',
    keyName: 'op'
  }
}

interface ValidChainsType {
  [mode: string]: number[]
}

const validChains: ValidChainsType = {
  local: [
    chainsMap.RINKEBY, chainsMap.BSC_TESTNET, chainsMap.MATIC_TESTNET
  ],
  dev: [
    chainsMap.RINKEBY, chainsMap.BSC_TESTNET, chainsMap.MATIC_TESTNET
  ],
  production: [
    chainsMap.ETH, chainsMap.BSC, chainsMap.MATIC, chainsMap.FANTOM,
    chainsMap.AVAX, chainsMap.ARBITRUM, chainsMap.OPTIMISM
  ]
}

export const getValidChains = (): number[] => {
  const mode = getAppMode()
  return mode?validChains[mode]:[]
}