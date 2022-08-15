import { chainsMap, RPC_URLS } from "./constants"
import { flow } from 'lodash'

interface ValidChainsType {
  [mode: string]: number[]
}

const validChains: ValidChainsType = {
  local: [
    chainsMap.RINKEBY, chainsMap.BSC_TESTNET, chainsMap.MATIC_TESTNET
  ]
}

export const getAppMode = (): string | undefined => {
  return process.env.NEXT_PUBLIC_MODE
}

export const getValidChains = (): number[] => {
  let mode = getAppMode()
  return mode?validChains[mode]:[]
}

export const getInfuraKey = (): string => {
  return process.env.NEXT_PUBLIC_INFURA_KEY as string
}

export const getAnkrKey = (): string => {
  return process.env.NEXT_PUBLIC_ANKR_KEY as string
}

export const getRpcUrls = (): {[chainId: number]: string} => {
  let validChains = getValidChains()
  return flow([
    Object.entries,
    (arr: [number, string][]) => arr.filter(([key]) => validChains.includes(key)),
    Object.fromEntries,
  ])(RPC_URLS)
}

export const getFormaticKey = (): string => {
  return process.env.NEXT_PUBLIC_ANKR_KEY as string
}