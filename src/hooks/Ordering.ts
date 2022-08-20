import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { BondTokenType } from "../state/types";
import { BOND_TOKEN, PurchaseTokenType, PURCHASE_TOKEN } from "../configs/constants/tokens";
import { useOrderingState, useSetBondToken, useSetPurchaseToken } from "../state/ordering/hooks";
import { useSetDestBalance, useSetOriginBalance, useWalletState } from "../state/wallet/hooks";
import getBalances from "../utils/multicall/getBalances";
import { BN, ConvertToDecimal, ZERO_BN } from "../utils/BigNumber";

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
        const bondAddress = bondToken.address[chain]

        const balances = await getBalances(chain, account, [
          purchaseToken.address,
          bondAddress
        ])
        
        let purchaseTokenBalance = balances[purchaseToken.address]?
            BN(balances[purchaseToken.address]):ZERO_BN
        purchaseTokenBalance = ConvertToDecimal(purchaseTokenBalance, purchaseToken.decimal)

        let bondTokenBalance = balances[bondAddress]?BN(balances[bondAddress]):ZERO_BN
        bondTokenBalance = ConvertToDecimal(bondTokenBalance, bondToken.decimal)

        setOriginBalance(purchaseTokenBalance.toString())
        setDestBalance(bondTokenBalance.toString())
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
      decimal: BOND_TOKEN.decimal,
      iconPath: BOND_TOKEN.iconPath,
      address: BOND_TOKEN.address[chain]
    })
  }, [chain]) //eslint-disable-line react-hooks/exhaustive-deps

  return { purchaseToken, bondToken }
}