import Web3 from "web3";
import ERC20_ABI from "../configs/ABIs/ERC20.json"
import { getContract } from "./contractHelpers";
import { AbiItem } from "web3-utils";
import { sendTransaction } from "./contractHelpers";

export const  getAllowance = async (
  library: Web3,
  token: string,
  account: string,
  spender: string
): Promise<string> => {
  try {
    const contract = getContract(library, ERC20_ABI as AbiItem[], token)
    const allowance = contract.methods.allowance(account, spender).call()
    return allowance
  } catch (error) {
    return "0"
  }
}

export const approveAllowance = async (
  library: Web3,
  token: string,
  account: string,
  amount: string,
  spender: string
): Promise<void> => {
  return sendTransaction(
    library,
    ERC20_ABI as AbiItem[],
    token,
    "approve",
    account,
    [spender, amount]
  )
}