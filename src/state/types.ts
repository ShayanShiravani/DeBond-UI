import { PurchaseTokenType } from "configs/constants/tokens"

export interface BondTokenType {
  symbol: string,
  iconPath: string,
  address: string
}
export interface OrderingState {
  chain: number,
  purchaseToken: PurchaseTokenType,
  bondToken: BondTokenType
}

export interface ClaimingState {
  chain: number
}

export interface WalletState {
  originBalance: string,
  destBalance: string
}