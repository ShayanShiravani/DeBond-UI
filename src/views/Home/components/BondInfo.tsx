import { Flex } from "rebass"
import InfoBox from "./InfoBox"
import SectionHeader from "./SectionTitle"

const BondInfo: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%">
        <div className={'w-full'}>
          <SectionHeader>BOND INFORMATION</SectionHeader>
          <Flex width="100%" flexDirection="column">
          </Flex>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 content-start w-full text-center py-4 my-4">
          <InfoBox
            caption="Face value"
            tooltipText="Amount each bond is redeemable for at maturity."
          >
            1 USDC
          </InfoBox>
          <InfoBox
            caption="Collateral tokens"
            tooltipText="Value of collateral securing each bond."
          >
            36M MUON ($12)
          </InfoBox>
          <InfoBox
            caption="Maturity date"
            tooltipText="Date each bond can be redeemed for $1 assuming no default."
          >
            MAY 27, 2023
          </InfoBox>
          <InfoBox
            caption="Collateralization ratio"
            tooltipText="Value of the collateral tokens divided by the face value of a bond."
          >
            1,200%
          </InfoBox>
        </div>
      </Flex>
    </>
  )
}

export default BondInfo