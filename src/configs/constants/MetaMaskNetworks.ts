import { chainsMap, ChainsParams } from "./chains";

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

// Configs used to add a network to the user's MetaMask
export const networkConfigs: {[chainId:number]: NetworkConfigType} = {
  [chainsMap.ETH]: {
    chainId: '0x1',
    chainName: ChainsParams[chainsMap.ETH].name,
    symbol: ChainsParams[chainsMap.ETH].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.ETH].currency,
      symbol: ChainsParams[chainsMap.ETH].currency,
      decimals: ChainsParams[chainsMap.ETH].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/eth'],
    blockExplorerUrls: ['https://etherscan.io/']
  },
  [chainsMap.RINKEBY]: {
    chainId: '0x4',
    chainName: ChainsParams[chainsMap.RINKEBY].name,
    symbol: ChainsParams[chainsMap.RINKEBY].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.RINKEBY].currency,
      symbol: ChainsParams[chainsMap.RINKEBY].currency,
      decimals: ChainsParams[chainsMap.RINKEBY].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/eth_rinkeby'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io/']
  },
  [chainsMap.ROPSTEN]: {
    chainId: '0x3',
    chainName: ChainsParams[chainsMap.ROPSTEN].name,
    symbol: ChainsParams[chainsMap.ROPSTEN].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.ROPSTEN].currency,
      symbol: ChainsParams[chainsMap.ROPSTEN].currency,
      decimals: ChainsParams[chainsMap.ROPSTEN].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/eth_ropsten'],
    blockExplorerUrls: ['https://ropsten.etherscan.io/']
  },
  [chainsMap.BSC]: {
    chainId: '0x38',
    chainName: ChainsParams[chainsMap.BSC].name,
    symbol: ChainsParams[chainsMap.BSC].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.BSC].currency,
      symbol: ChainsParams[chainsMap.BSC].currency,
      decimals: ChainsParams[chainsMap.BSC].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/bsc'],
    blockExplorerUrls: ['https://bscscan.com']
  },
  [chainsMap.BSC_TESTNET]: {
    chainId: '0x61',
    chainName: ChainsParams[chainsMap.BSC_TESTNET].name,
    symbol: ChainsParams[chainsMap.BSC_TESTNET].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.BSC_TESTNET].currency,
      symbol: ChainsParams[chainsMap.BSC_TESTNET].currency,
      decimals: ChainsParams[chainsMap.BSC_TESTNET].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/bsc_testnet_chapel'],
    blockExplorerUrls: ['https://testnet.bscscan.com']
  },
  [chainsMap.MATIC]: {
    chainId: '0x89',
    chainName: ChainsParams[chainsMap.MATIC].name,
    symbol: ChainsParams[chainsMap.MATIC].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.MATIC].currency,
      symbol: ChainsParams[chainsMap.MATIC].currency,
      decimals: ChainsParams[chainsMap.MATIC].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/polygon'],
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  [chainsMap.MATIC_TESTNET]: {
    chainId: '0x13881',
    chainName: ChainsParams[chainsMap.MATIC_TESTNET].name,
    symbol: ChainsParams[chainsMap.MATIC_TESTNET].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.MATIC_TESTNET].currency,
      symbol: ChainsParams[chainsMap.MATIC_TESTNET].currency,
      decimals: ChainsParams[chainsMap.MATIC_TESTNET].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/polygon_mumbai'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
  },
  [chainsMap.XDAI]: {
    chainId: '0x64',
    chainName: ChainsParams[chainsMap.XDAI].name,
    symbol: ChainsParams[chainsMap.XDAI].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.XDAI].currency,
      symbol: ChainsParams[chainsMap.XDAI].symbol,
      decimals: ChainsParams[chainsMap.XDAI].decimal,
    },
    rpcUrls: ['https://rpc.xdaichain.com/'],
    blockExplorerUrls: ['https://blockscout.com/poa/xdai/']
  },
  [chainsMap.SOKOL]: {
    chainId: '77',
    chainName: ChainsParams[chainsMap.SOKOL].name,
    symbol: ChainsParams[chainsMap.SOKOL].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.SOKOL].currency,
      symbol: ChainsParams[chainsMap.SOKOL].symbol,
      decimals: ChainsParams[chainsMap.SOKOL].decimal,
    },
    rpcUrls: ['https://sokol.poa.network/'],
    blockExplorerUrls: ['https://blockscout.com/poa/sokol']
  },
  [chainsMap.FANTOM]: {
    chainId: '0xFA',
    chainName: ChainsParams[chainsMap.FANTOM].name,
    symbol: ChainsParams[chainsMap.FANTOM].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.FANTOM].currency,
      symbol: ChainsParams[chainsMap.FANTOM].currency,
      decimals: ChainsParams[chainsMap.FANTOM].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/fantom'],
    blockExplorerUrls: ['https://ftmscan.com/']
  },
  [chainsMap.FANTOM_TESTNET]: {
    chainId: '0xfa2',
    chainName: ChainsParams[chainsMap.FANTOM_TESTNET].name,
    symbol: ChainsParams[chainsMap.FANTOM_TESTNET].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.FANTOM_TESTNET].currency,
      symbol: ChainsParams[chainsMap.FANTOM_TESTNET].symbol,
      decimals: ChainsParams[chainsMap.FANTOM_TESTNET].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/fantom_testnet'],
    blockExplorerUrls: ['https://testnet.ftmscan.com/']
  },
  [chainsMap.HECO]: {
    chainId: '0x80',
    chainName: ChainsParams[chainsMap.HECO].name,
    symbol: ChainsParams[chainsMap.HECO].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.HECO].currency,
      symbol: ChainsParams[chainsMap.HECO].currency,
      decimals: ChainsParams[chainsMap.HECO].decimal,
    },
    rpcUrls: ['https://http-mainnet.hecochain.com'],
    blockExplorerUrls: ['https://hecoinfo.com']
  },
  [chainsMap.HECO_TESTNET]: {
    chainId: '0x100',
    chainName: ChainsParams[chainsMap.HECO_TESTNET].name,
    symbol: ChainsParams[chainsMap.HECO_TESTNET].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.HECO_TESTNET].currency,
      symbol: ChainsParams[chainsMap.HECO_TESTNET].currency,
      decimals: ChainsParams[chainsMap.HECO_TESTNET].decimal,
    },
    rpcUrls: ['https://http-testnet.hecochain.com'],
    blockExplorerUrls: ['https://testnet.hecoinfo.com']
  },
  [chainsMap.AVAX]: {
    chainId: '0xa86a',
    chainName: ChainsParams[chainsMap.AVAX].name,
    symbol: ChainsParams[chainsMap.AVAX].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.AVAX].currency,
      symbol: ChainsParams[chainsMap.AVAX].currency,
      decimals: ChainsParams[chainsMap.AVAX].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/avalanche'],
    blockExplorerUrls: ['https://cchain.explorer.avax.network/']
  },
  [chainsMap.ARBITRUM]: {
    chainId: '0xA4B1',
    chainName: ChainsParams[chainsMap.ARBITRUM].name,
    symbol: ChainsParams[chainsMap.ARBITRUM].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.ARBITRUM].currency,
      symbol: ChainsParams[chainsMap.ARBITRUM].currency,
      decimals: ChainsParams[chainsMap.ARBITRUM].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/arbitrum'],
    blockExplorerUrls: ['https://arbiscan.io/']
  },
  [chainsMap.OPTIMISM]: {
    chainId: '0xA',
    chainName: ChainsParams[chainsMap.OPTIMISM].name,
    symbol: ChainsParams[chainsMap.OPTIMISM].symbol,
    nativeCurrency: {
      name: ChainsParams[chainsMap.OPTIMISM].currency,
      symbol: ChainsParams[chainsMap.OPTIMISM].currency,
      decimals: ChainsParams[chainsMap.OPTIMISM].decimal,
    },
    rpcUrls: ['https://rpc.ankr.com/optimism'],
    blockExplorerUrls: ['https://optimistic.etherscan.io/']
  }
}