import React from "react"
import { ChainsParams } from "../../../configs/constants/chains"
import { useClaimingState, useSetChain } from "../../../state/claiming/hooks"
import Chain from "./Chain"

const ClaimingForm: React.FC = () => {
  const { chain } = useClaimingState()
  const setChain = useSetChain()
  
  return (
    <div className={'mb-4'}>
      <Chain 
        setChain={setChain}
        selectedChain={ChainsParams[chain]}
      />
    </div>
  )
}

export default ClaimingForm