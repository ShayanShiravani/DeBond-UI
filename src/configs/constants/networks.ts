import { chainsMap } from ".";

type NetworkConfigType = {
  chainId: string,
  chainName: string,
  symbol: string,
  nativeCurrency: {
    name: string,
    symbol: string,
    decimals: number,
  },
  rpcUrls: string[],
  blockExplorerUrls?: string[]
}

export const networkConfigs: {[chainId:number]: NetworkConfigType} = {
  [chainsMap.ETH]: {
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    symbol: 'ETH',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/eth'],
    blockExplorerUrls: ['https://etherscan.io/']
  },
  [chainsMap.RINKEBY]: {
    chainId: '0x4',
    chainName: 'Rinkeby Testnet',
    symbol: 'ETH',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/eth_rinkeby'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io/']
  },
  [chainsMap.ROPSTEN]: {
    chainId: '0x3',
    chainName: 'Ropsten Testnet',
    symbol: 'ETH',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/eth_ropsten'],
    blockExplorerUrls: ['https://ropsten.etherscan.io/']
  },
  [chainsMap.BSC]: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain Mainnet',
    symbol: 'BSC',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/bsc'],
    blockExplorerUrls: ['https://bscscan.com']
  },
  [chainsMap.BSC_TESTNET]: {
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    symbol: 'BSC',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/bsc_testnet_chapel'],
    blockExplorerUrls: ['https://testnet.bscscan.com']
  },
  [chainsMap.MATIC]: {
    chainId: '0x89',
    chainName: 'Matic Mainnet',
    symbol: 'MATIC',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/polygon'],
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  [chainsMap.MATIC_TESTNET]: {
    chainId: '0x13881',
    chainName: 'Mumbai',
    symbol: 'MATIC',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/polygon_mumbai'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
  },
  [chainsMap.XDAI]: {
    chainId: '0x64',
    chainName: 'xDAI Chain',
    symbol: 'xDAI',
    nativeCurrency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.xdaichain.com/'],
    blockExplorerUrls: ['https://blockscout.com/poa/xdai/']
  },
  [chainsMap.SOKOL]: {
    chainId: '77',
    chainName: 'Sokol',
    symbol: 'xDAI',
    nativeCurrency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
    },
    rpcUrls: ['https://sokol.poa.network/'],
    blockExplorerUrls: ['https://blockscout.com/poa/sokol']
  },
  [chainsMap.FANTOM]: {
    chainId: '0xFA',
    chainName: 'Fantom Opera',
    symbol: 'FTM',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/fantom'],
    blockExplorerUrls: ['https://ftmscan.com/']
  },
  [chainsMap.FANTOM_TESTNET]: {
    chainId: '0xfa2',
    chainName: 'Fantom testnet Opera',
    symbol: 'FTM',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/fantom_testnet'],
    blockExplorerUrls: ['https://testnet.ftmscan.com/']
  },
  [chainsMap.HECO]: {
    chainId: '0x80',
    chainName: 'Huobi ECO Chain Mainnet',
    symbol: 'HT',
    nativeCurrency: {
      name: 'HT',
      symbol: 'HT',
      decimals: 18,
    },
    rpcUrls: ['https://http-mainnet.hecochain.com'],
    blockExplorerUrls: ['https://hecoinfo.com']
  },
  [chainsMap.HECO_TESTNET]: {
    chainId: '0x100',
    chainName: 'Huobi ECO Chain Testnet',
    symbol: 'HT',
    nativeCurrency: {
      name: 'htt',
      symbol: 'htt',
      decimals: 18,
    },
    rpcUrls: ['https://http-testnet.hecochain.com'],
    blockExplorerUrls: ['https://testnet.hecoinfo.com']
  },
  [chainsMap.AVAX]: {
    chainId: '0xa86a',
    chainName: 'Avalanche Network',
    symbol: 'AVAX',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/avalanche'],
    blockExplorerUrls: ['https://cchain.explorer.avax.network/']
  },
  [chainsMap.ARBITRUM]: {
    chainId: '0xA4B1',
    chainName: 'Arbitrum',
    symbol: 'ARBITRUM',
    nativeCurrency: {
      name: 'ARBITRUM',
      symbol: 'ARBITRUM',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/arbitrum'],
    blockExplorerUrls: ['https://arbiscan.io/']
  },
  [chainsMap.OPTIMISM]: {
    chainId: '0xA',
    chainName: 'Optimism',
    symbol: 'OP',
    nativeCurrency: {
      name: 'Optimism',
      symbol: 'OP',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/optimism'],
    blockExplorerUrls: ['https://optimistic.etherscan.io/']
  }
}