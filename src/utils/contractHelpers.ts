import { AbiItem } from 'web3-utils'
import Web3 from "web3"
import { Contract } from "web3-eth-contract"

export const getContract = (
  library: Web3, abi: AbiItem[] | AbiItem,  address: string
): Contract => {
  return new library.eth.Contract(abi, address)
}
