import React, { useCallback, useEffect, useState } from "react"
import ActionButton from "../../../components/ActionButton"
import { Flex } from "rebass"
import OrderingForm from "./OrderingForm"
import { useOrderingState } from "../../../state/ordering/hooks"
import { NameChainMap } from "../../../configs/constants/chains"
import { useBtnStatus } from "../hooks/ActionButton"
import { ACTION_BUTTON_STATUS } from "../constants"
import WalletModal from "../../../components/Modal/WalletModal"
import { addRPC } from "../../../utils/wallet"
import { useWeb3React } from "@web3-react/core"
import { approveAllowance } from "../../../utils/token"
import { BN, ExponentToBigDecimal } from "../../../utils/BigNumber"
import { APPROVE_AMOUNT } from "../../../configs/constants/tokens"
import { useSetAllowance } from "../../../hooks/Ordering"

const Bonding: React.FC = () => {
  const { library, account } = useWeb3React()
  const [ btnText, setBtnText ] = useState("")
  const [ btnStyle, setBtnStyle ] = useState("btn-primary")
  const [ openModal, setOpenModal ] = useState(false)
  const [ fetchAllowance, setFetchAllowance ] = useState(false)
  const { chain: selectedChain, purchaseToken, bondToken } = useOrderingState()
  const allowance = useSetAllowance(fetchAllowance)
  const btnStatus = useBtnStatus(allowance)

  useEffect(() => {
    switch (btnStatus) {
      case ACTION_BUTTON_STATUS.CONNECT:
        setBtnText("Connect Wallet")
        setBtnStyle("btn-primary")
        break
      case ACTION_BUTTON_STATUS.WRONG_NETWORK:
        setBtnText(`Switch to ${NameChainMap[selectedChain]}`)
        setBtnStyle("btn-secondary-inverted")
        break
      case ACTION_BUTTON_STATUS.DEPOSIT:
        setBtnText("Deposit")
        setBtnStyle("btn-primary")
        break
      default:
        setBtnText("Approve")
        setBtnStyle("btn-primary")
        break
    }
  }, [btnStatus, selectedChain])

  const btnClickHandler = useCallback(
    (): void => {
      switch (btnStatus) {
        case ACTION_BUTTON_STATUS.CONNECT:
          setOpenModal(true)
          break;
        case ACTION_BUTTON_STATUS.WRONG_NETWORK:
          addRPC(selectedChain, library)
          break
        case ACTION_BUTTON_STATUS.DEPOSIT:
          //TODO: fixme
          break
        case ACTION_BUTTON_STATUS.APPROVE:
          const amount = BN(APPROVE_AMOUNT).multipliedBy(
            ExponentToBigDecimal(purchaseToken.decimal)
          )
          if(account) {
            approveAllowance(library, purchaseToken.address, account, amount.toString(), 
              bondToken.address)
              .then(() => setFetchAllowance(!fetchAllowance))
          }
          break
        default:
          break;
      }
    },
    [
      btnStatus, selectedChain, library, account, purchaseToken, 
      bondToken, fetchAllowance
    ]
  )

  

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%">
      <div className={'w-full'}>
        <Flex width="100%" flexDirection="column">
          <OrderingForm />
          <ActionButton
            style={btnStyle}
            onClick={btnClickHandler}
          >
            {btnText}
          </ActionButton>
          <WalletModal 
            closeModal={() => setOpenModal(false)} 
            open={openModal} 
            hide={() => setOpenModal(!openModal)} 
          />
        </Flex>
      </div>
    </Flex>
  )
}

export default Bonding