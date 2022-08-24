import React from "react"
import { ChainsParams } from "../../../configs/constants/chains"
import { useOrderingState, useSetAmountFrom, useSetAmountTo, useSetChain } from "../../../state/ordering/hooks"
import { useSetBalances, useSetTokens } from "../../../hooks/Ordering"
import AmountBox from "./AmountBox"
import Chain from "./Chain"
import { BN } from "../../../utils/BigNumber"

const OrderingForm: React.FC = () => {
  const { chain, amountFrom, amountTo } = useOrderingState()
  const { originBalance, destBalance } = useSetBalances()
  const { purchaseToken, bondToken } = useSetTokens()
  const setChain = useSetChain()
  const setAmountFrom = useSetAmountFrom()
  const setAmountTo = useSetAmountTo()
  
  const handleFromAmount = (amount: string): void => {
    setAmountFrom(amount)
    const amountFrom = BN(amount)
    const bondPrice = BN(bondToken.unitPrice)
    const amountTo = amountFrom.div(bondPrice)
    handleToAmount(amountTo.toString())
  }

  const handleToAmount = (amount: string): void => {
    setAmountTo(amount)
  }
  
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
        handleAmount={handleFromAmount}
        amount={amountFrom}
      />
      <AmountBox
        label={'To'} 
        token={bondToken}
        margin='mb-4'
        balance={destBalance}
        amount={amountTo}
        disabled={true}
      />
    </>
  )
}

export default OrderingForm