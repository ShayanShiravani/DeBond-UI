import React from "react"
import ActionButton from "../../../components/ActionButton"
import { Flex } from "rebass"
import OrderingForm from "./OrderingForm"

const Bonding: React.FC = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%">
      <div className={'w-full'}>
        <Flex width="100%" flexDirection="column">
          <OrderingForm />
          <ActionButton>
            Connect Wallet
          </ActionButton>
        </Flex>
      </div>
    </Flex>
  )
}

export default Bonding