import { PurchaseTokenType } from "../configs/constants/tokens"

export interface BondTokenType {
  symbol: string,
  decimal: number,
  unitPrice: string,
  iconPath: string,
  address: string
}
export interface OrderingState {
  chain: number,
  purchaseToken: PurchaseTokenType,
  bondToken: BondTokenType,
  amountFrom: string,
  amountTo: string
}

export interface ClaimingState {
  chain: number
}

export interface WalletState {
  originBalance: string,
  destBalance: string
}