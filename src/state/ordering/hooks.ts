import { PurchaseTokenType } from "configs/constants/tokens"
import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "state/hooks"
import { BondTokenType } from "state/types"
import { setBondToken, setChain, setPurchaseToken } from "./actions"

export const useOrderingState = () => {
  return useAppSelector((state) => state.ordering)
}

export const useSetChain = () => {
  const dispatch = useAppDispatch()
  return useCallback((chainId: number) => {
    dispatch(setChain(chainId))
  }, [dispatch]) //eslint-disable-line
}

export const useSetPurchaseToken = () => {
  const dispatch = useAppDispatch()
  return useCallback((token: PurchaseTokenType) => {
    dispatch(setPurchaseToken(token))
  }, [dispatch])
}

export const useSetBondToken = () => {
  const dispatch = useAppDispatch()
  return useCallback((token: BondTokenType) => {
    dispatch(setBondToken(token))
  }, [dispatch])
}