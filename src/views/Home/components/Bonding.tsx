import React, { useEffect, useState } from "react"
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

const Bonding: React.FC = () => {
  const { library } = useWeb3React()
  const [ btnText, setBtnText ] = useState("")
  const [ btnStyle, setBtnStyle ] = useState("btn-primary")
  const [ openModal, setOpenModal ] = useState(false)
  const { chain: selectedChain } = useOrderingState()
  const btnStatus = useBtnStatus()

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
      default:
        setBtnText("Approve")
        setBtnStyle("btn-primary")
        break
    }
  }, [btnStatus, selectedChain])

  const btnClickHandler = (): void => {
    switch (btnStatus) {
      case ACTION_BUTTON_STATUS.CONNECT:
        setOpenModal(true)
        break;
      case ACTION_BUTTON_STATUS.WRONG_NETWORK:
        addRPC(selectedChain, library)
        break
      default:
        break;
    }
  }

  

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