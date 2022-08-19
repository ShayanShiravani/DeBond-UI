import { random } from "lodash"
import Web3 from "web3"
import {Contract} from 'web3-eth-contract'
import {AbiItem} from 'web3-utils'
import { getAppRpcUrl } from "../configs//constants/rpc"

export const getLibrary = (provider: any): Web3 => {
  return new Web3(provider)
}

export const getAppLibrary = (chainId: number): Web3 => {
  const chainProviders = getAppRpcUrl(chainId)
  const randomIndex = random(0, chainProviders.length - 1)
  return new Web3(chainProviders[randomIndex])
}

export const getContract = (
  library: Web3, abi: AbiItem[] | AbiItem,  address: string
): Contract => {
  return new library.eth.Contract(abi, address)
}
