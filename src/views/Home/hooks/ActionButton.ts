import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { useOrderingState } from "../../../state/ordering/hooks"
import { ACTION_BUTTON_STATUS } from "../constants"

export const useBtnStatus = (): ACTION_BUTTON_STATUS => {
  const { account, active, chainId } = useWeb3React()
  const { chain: selectedChain } = useOrderingState()
  const [action, setAction] = useState(ACTION_BUTTON_STATUS.CONNECT)

  useEffect(() => {
    if (!account) {
      setAction(ACTION_BUTTON_STATUS.CONNECT)
    } else {
      if (chainId !== selectedChain) {
        setAction(ACTION_BUTTON_STATUS.WRONG_NETWORK)
      } else {
        setAction(ACTION_BUTTON_STATUS.APPROVE)
      }
    }
  }, [account, active, chainId, selectedChain])

  return action
}