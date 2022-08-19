import multicall from "."
import { getAppLibrary } from "../web3React"
import ERC20_ABI from "../../configs/ABIs/ERC20.json"
import { ContractCallContext } from "ethereum-multicall"

const getBalances = async (
  chainId: number, wallet: string, tokens: string[]
): Promise<{[token: string]: string}> => {

  const contractCallContext: ContractCallContext[] = tokens.map(
    (token: string): ContractCallContext => ({
      reference: token,
      contractAddress: token,
      abi: ERC20_ABI,
      calls: [{
        reference: 'balanceOf',
        methodName: 'balanceOf',
        methodParameters: [wallet]
      }]
    })
  )
  const library = getAppLibrary(chainId)
  const result = await multicall(library, contractCallContext)
  const balances:{[token: string]: string} = {}
  if(result) {
      Object.entries(result).map(
      (item) => {
        const [token, returnedValue] = item
        const rawValue = returnedValue['callsReturnContext'][0]['returnValues'][0]
        balances[token] = library.utils.hexToNumberString(rawValue.hex)
      }
    )
  }
  return balances
}

export default getBalances