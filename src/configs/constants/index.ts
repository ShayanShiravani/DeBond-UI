
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

export const RPC_URLS: { [chainId: number]: string } = {
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