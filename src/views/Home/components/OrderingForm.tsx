import React from "react"
import { ChainsParams } from "../../../configs/constants/chains"
import { useOrderingState, useSetChain } from "../../../state/ordering/hooks"
import { useSetBalances, useSetTokens } from "../../../hooks/Ordering"
import AmountBox from "./AmountBox"
import Chain from "./Chain"

const OrderingForm: React.FC = () => {
  const { chain } = useOrderingState()
  const setChain = useSetChain()
  const { originBalance, destBalance } = useSetBalances()
  const { purchaseToken, bondToken } = useSetTokens()
  
  return (
    <>
      <div className={'mb-4'}>
        <Chain 
          setChain={setChain}
          selectedChain={ChainsParams[chain]}
        />
      </div>
      <AmountBox
        label={'From'} 
        token={purchaseToken} 
        hasMaxBtn={true}
        margin='mb-4'
        balance={originBalance}
      />
      <AmountBox
        label={'To'} 
        token={bondToken}
        margin='mb-4'
        balance={destBalance}
      />
    </>
  )
}

export default OrderingForm