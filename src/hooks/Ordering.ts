import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { BondTokenType } from "../state/types";
import { BOND_TOKEN, PurchaseTokenType, PURCHASE_TOKEN } from "../configs/constants/tokens";
import { useOrderingState, useSetBondToken, useSetPurchaseToken } from "../state/ordering/hooks";
import { useSetDestBalance, useSetOriginBalance, useWalletState } from "../state/wallet/hooks";
import getBalances from "../utils/multicall/getBalances";
import { BN, ConvertToDecimal, ZERO_BN } from "../utils/BigNumber";
import { getAllowance } from "../utils/token";

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
      ...BOND_TOKEN,
      address: BOND_TOKEN.address[chain]
    })
  }, [chain]) //eslint-disable-line react-hooks/exhaustive-deps

  return { purchaseToken, bondToken }
}

export const useSetAllowance = (trigger?: boolean): string => {
  const { library, account } = useWeb3React()
  const { purchaseToken, bondToken } = useOrderingState()
  const [ allowance, setAllowance ] = useState("0")

  useEffect(() => {
    const fetchAllowance = async() => {
      if(account) {
        const result = await getAllowance(library, purchaseToken.address, account, bondToken.address)
        setAllowance(result)
      }
    }
    fetchAllowance()
  }, [library, purchaseToken, account, bondToken, trigger])

  return allowance
}