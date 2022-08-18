import { ChainsParams } from "configs/constants"
import { Flex } from "rebass"
import { useClaimingState, useSetChain } from "state/claiming/hooks"
import Chain from "./Chain"

const ClaimingForm: React.FC = () => {
  const { chain } = useClaimingState()
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
        </Flex>
      </div>
    </Flex>
  )
}

export default ClaimingForm