import React from "react"
import { Flex } from "rebass"
import { useOrderingState } from "../../../state/ordering/hooks"
import InfoBox from "./InfoBox"
import SectionHeader from "./SectionTitle"

const OtcInfo: React.FC = () => {
  const { bondToken } = useOrderingState()
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%">
      <div className={'w-full'}>
        <SectionHeader>OTC INFORMATION</SectionHeader>
        <Flex width="100%" flexDirection="column">
        </Flex>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 content-start w-full text-center py-4 my-4">
        <InfoBox
          caption="Offering amount"
          tooltipText="Number of bonds being sold."
        >
          3M bonds
        </InfoBox>
        <InfoBox
          caption="Total order volume"
          tooltipText="Sum of all order volume."
        >
          2.455M USDC
        </InfoBox>
        <InfoBox
          caption="Min funding threshold"
          tooltipText="Minimum order volume required for auction to close. If this value is not reached, all funds will be returned and no bonds will be sold."
        >
          1,000 USDC
        </InfoBox>
        <InfoBox
          caption="Minimum order amount"
          tooltipText="Minimum amount for a single order. Orders below this amount cannot be placed."
        >
          100 USDC
        </InfoBox>
        <InfoBox
          caption="Bond price"
          tooltipText="The price that must be paid to purchase a bond."
        >
          {`${bondToken.unitPrice} USDC`}
        </InfoBox>
        <InfoBox
          caption="Bond YTM"
          tooltipText="Yield to maturity that will be paid. This is calculated using the bond price."
        >
          0.2 USDC
        </InfoBox>
      </div>
    </Flex>
  )
}

export default OtcInfo