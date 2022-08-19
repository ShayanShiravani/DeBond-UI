import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { BondTokenType } from "state/types";
import { BOND_TOKEN, PurchaseTokenType, PURCHASE_TOKEN } from "../configs/constants/tokens";
import { useOrderingState, useSetBondToken, useSetPurchaseToken } from "../state/ordering/hooks";
import { useSetDestBalance, useSetOriginBalance, useWalletState } from "../state/wallet/hooks";
import getBalances from "../utils/multicall/getBalances";

interface setBalancesType {
  originBalance: string,
  destBalance: string
}

export const useSetBalances = (): setBalancesType => {
  const { account, active } = useWeb3React()
  const { originBalance, destBalance } = useWalletState()
  const { chain } = useOrderingState()
  const setOriginBalance = useSetOriginBalance()
  const setDestBalance = useSetDestBalance()

  useEffect(() => {
    const fetchBalances = async () => {
      if(active && account) {

        const purchaseToken = PURCHASE_TOKEN[chain]
        const bondToken = BOND_TOKEN

        const balances = await getBalances(chain, account, [
          purchaseToken.address,
          bondToken.address[chain]
        ])

        setOriginBalance(balances[purchaseToken.address])
        setDestBalance(balances[bondToken.address[chain]])
      }
    }
    fetchBalances()
  }, [active, account, chain]) //eslint-disable-line react-hooks/exhaustive-deps

  return { originBalance, destBalance }
  
}

export const useSetTokens = (): {
  purchaseToken: PurchaseTokenType,
  bondToken: BondTokenType
} => {
  const { chain, purchaseToken, bondToken } = useOrderingState()
  const setPurchaseToken = useSetPurchaseToken()
  const setBondToken = useSetBondToken()

  useEffect(() => {
    setPurchaseToken(PURCHASE_TOKEN[chain])
    setBondToken({
      symbol: BOND_TOKEN.symbol,
      iconPath: BOND_TOKEN.iconPath,
      address: BOND_TOKEN.address[chain]
    })
  }, [chain]) //eslint-disable-line react-hooks/exhaustive-deps

  return { purchaseToken, bondToken }
}