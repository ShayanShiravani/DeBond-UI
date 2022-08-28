import { chainsMap } from "./chains";

export interface PurchaseTokenType {
  symbol: string,
  address: string,
  decimal: number,
  iconPath: string,
  keyName: string // Used to interaction with Muon app
}

export const PURCHASE_TOKEN: {[chainId: number]: PurchaseTokenType} = {
  [chainsMap.ETH]: {
    symbol: 'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimal: 6,
    iconPath: './images/tokens/usdc.svg',
    keyName: 'usdc'
  },
  [chainsMap.RINKEBY]: {
    symbol: 'ERT_d6',
    address: '0xfBB0Aa52B82dD2173D8ce97065b2f421216A312A',
    decimal: 6,
    iconPath: './images/tokens/ert.svg',
    keyName: 'ert_d6'
  },
  [chainsMap.BSC]: {
    symbol: 'BUSD',
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    decimal: 18,
    iconPath: './images/tokens/busd.svg',
    keyName: 'busd'
  },
  [chainsMap.BSC_TESTNET]: {
    symbol: 'ERT_d6',
    address: '0xfBB0Aa52B82dD2173D8ce97065b2f421216A312A',
    decimal: 6,
    iconPath: './images/tokens/ert.svg',
    keyName: 'ert_d6'
  },
  [chainsMap.MATIC]: {
    symbol: 'USDC',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    decimal: 6,
    iconPath: './images/tokens/usdc.svg',
    keyName: 'usdc'
  },
  [chainsMap.MATIC_TESTNET]: {
    symbol: 'ERT_d18',
    address: '0x701048911b1f1121E33834d3633227A954978d53',
    decimal: 18,
    iconPath: './images/tokens/ert.svg',
    keyName: 'ert_d6'
  },
  [chainsMap.FANTOM]: {
    symbol: 'USDC',
    address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    decimal: 6,
    iconPath: './images/tokens/usdc.svg',
    keyName: 'usdc'
  },
  [chainsMap.AVAX]: {
    symbol: 'USDC',
    address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    decimal: 6,
    iconPath: './images/tokens/usdc.svg',
    keyName: 'usdc'
  },
  [chainsMap.ARBITRUM]: {
    symbol: 'USDC',
    address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    decimal: 6,
    iconPath: './images/tokens/usdc.svg',
    keyName: 'usdc'
  },
  [chainsMap.OPTIMISM]: {
    symbol: 'USDC',
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    decimal: 6,
    iconPath: './images/tokens/usdc.svg',
    keyName: 'usdc'
  }
}

export const BOND_TOKEN = {
  symbol: 'bMUON',
  decimal: 6,
  unitPrice: "0.8", // USD price
  iconPath: './images/tokens/muon.svg',
  address: {
    [chainsMap.RINKEBY]: "0xCbFE026CFb9296Df5b13b95d56Fc620166B23CbC"
  }
}

export const APPROVE_AMOUNT = 1000000