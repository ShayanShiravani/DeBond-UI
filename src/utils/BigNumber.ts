import BigNumber from "bignumber.js"

export const BN = (num: BigNumber.Value): BigNumber => {
  return new BigNumber(num)
}

export const ZERO_BN = BN(0)

export type BnType = BigNumber
