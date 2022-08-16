import { chainsMap, RPC_URLS } from "./constants"
import { flow } from 'lodash'

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

export const getAppMode = (): string | undefined => {
  return process.env.NEXT_PUBLIC_MODE
}

export const getValidChains = (): number[] => {
  const mode = getAppMode()
  return mode?validChains[mode]:[]
}

export const getInfuraKey = (): string => {
  return process.env.NEXT_PUBLIC_INFURA_KEY as string
}

export const getAnkrKey = (): string => {
  return process.env.NEXT_PUBLIC_ANKR_KEY as string
}

export const getRpcUrls = (): {[chainId: number]: string} => {
  const validChains = getValidChains()
  return flow([
    Object.entries,
    (arr: [string, string][]) => arr.filter(([key]) => validChains.includes(+key)),
    Object.fromEntries,
  ])(RPC_URLS)
}

export const getFormaticKey = (): string => {
  return process.env.NEXT_PUBLIC_ANKR_KEY as string
}