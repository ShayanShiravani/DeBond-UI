import { AbiItem } from 'web3-utils'
import Web3 from "web3"
import { Contract } from "web3-eth-contract"

export const getContract = (
  library: Web3, abi: AbiItem[] | AbiItem,  address: string
): Contract => {
  return new library.eth.Contract(abi, address)
}

export const sendTransaction = async (
  library: Web3, 
  abi: AbiItem | AbiItem[], 
  contractAddress: string,
  method: string,
  account: string,
  params: any[],
  payableValue: string | null = null
): Promise<any> => {
  const contract = getContract(library, abi, contractAddress)
  let hash = null
  const additionalOptions = {}
  if (payableValue !== null) {
    additionalOptions['value'] = payableValue
  }
  console.log(additionalOptions)
  return contract.methods[method](...params)
    .send({ 
      from: account,
      ...additionalOptions 
    })
    .once('transactionHash', (tx) => {
      hash = tx
      // addTransaction({
      //   ...info,
      //   hash,
      //   message: `${info.type}ing transaction is pending.`,
      //   status: TransactionStatus.PENDING,
      // })
    })
    .once('receipt', ({ transactionHash }) => {
      console.log(transactionHash)
      // addTransaction({
      //   ...info,
      //   hash: transactionHash,
      //   message: 'Transaction successful.',
      //   status: TransactionStatus.SUCCESS,
      // })
    })
    .once('error', () => {
      if (!hash) {
        // addTransaction({
        //   ...info,
        //   message: 'Transaction rejected.',
        //   status: TransactionStatus.FAILED,
        // })
      }
      // addTransaction({
      //   ...info,
      //   hash,
      //   message: 'Transaction failed.',
      //   status: TransactionStatus.FAILED,
      // })
    })
    .then((receipt) => {
      return receipt
    })
    .catch((error) => {
      console.log("sendTransaction error:", error)
      return error
    })
}
