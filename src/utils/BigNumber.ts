import BigNumber from "bignumber.js"

export const BN = (num: BigNumber.Value): BigNumber => {
  return new BigNumber(num)
}

export const ZERO_BN = BN(0)

export type BnType = BigNumber

export const ExponentToBigDecimal = (decimals: number): BigNumber => {
  return BN(10).pow(decimals)
}

export const ConvertToDecimal =(amount: BigNumber, decimals: number): BigNumber => {
  return amount.div(
    ExponentToBigDecimal(decimals)
  )
}
