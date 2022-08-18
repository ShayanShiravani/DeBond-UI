import { ChainsParams } from "configs/constants"
import { BOND_TOKEN, PURCHASE_TOKENS } from "configs/constants/tokens"
import { Flex } from "rebass"
import { useOrderingState, useSetChain } from "state/ordering/hooks"
import AmountBox from "./AmountBox"
import Chain from "./Chain"

const OrderingForm: React.FC = () => {
  const { chain } = useOrderingState()
  const setChain = useSetChain()
  
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%">
      <div className={'w-full'}>
        <Flex width="100%" flexDirection="column">
          <div className={'mb-4'}>
            <Chain 
              setChain={setChain}
              selectedChain={ChainsParams[chain]}
            />
          </div>
          <AmountBox
            label={'From'} 
            token={PURCHASE_TOKENS[chain]} 
            hasMaxBtn={true}
            margin='mb-4'
          />
        </Flex>
        <AmountBox
          label={'To'} 
          token={BOND_TOKEN}
        />
      </div>
    </Flex>
  )
}

export default OrderingForm