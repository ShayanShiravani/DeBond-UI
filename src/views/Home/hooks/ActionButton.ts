import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { useOrderingState } from "../../../state/ordering/hooks"
import { BN, ConvertToDecimal, ZERO_BN } from "../../../utils/BigNumber"
import { ACTION_BUTTON_STATUS } from "../constants"

export const useBtnStatus = (allowance: string): ACTION_BUTTON_STATUS => {
  const { library, account, active, chainId } = useWeb3React()
  const { chain: selectedChain, purchaseToken, bondToken, amountFrom } = useOrderingState()
  const [action, setAction] = useState(ACTION_BUTTON_STATUS.CONNECT)

  useEffect(() => {
    const setActionBtn = async (): Promise<void> => {
      console.log("allowance", allowance)
      if (!account) {
        setAction(ACTION_BUTTON_STATUS.CONNECT)
      } else {
        if (chainId !== selectedChain) {
          setAction(ACTION_BUTTON_STATUS.WRONG_NETWORK)
        } else {
          const depositAmount = BN(amountFrom?amountFrom:"0")
          const decimalAllowance = ConvertToDecimal(BN(allowance), purchaseToken.decimal)
          if(!decimalAllowance.eq(ZERO_BN) && decimalAllowance.gte(depositAmount)) {
            setAction(ACTION_BUTTON_STATUS.DEPOSIT)
          } else {
            setAction(ACTION_BUTTON_STATUS.APPROVE)
          }
        }
      }
    }
    setActionBtn()
  }, [account, active, chainId, selectedChain, library, 
    purchaseToken, bondToken, amountFrom, allowance])

  return action
}