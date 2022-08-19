import {
  Multicall,
  ContractCallResults,
  ContractCallContext,
  ContractCallReturnContext,
} from 'ethereum-multicall';
import Web3 from 'web3';

const multicall = async (
  library: Web3, callContext: ContractCallContext[]
): Promise<{[reference: string]: ContractCallReturnContext} | undefined> => {

  try {
    const multicallObj = new Multicall({ web3Instance: library, tryAggregate: true })
    const results: ContractCallResults = await multicallObj.call(callContext)
    return results.results
  } catch (error) {
    console.log('Error happend in Multicall', error)
  }

}

export default multicall
