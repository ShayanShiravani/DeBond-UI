import { PurchaseTokenType } from "../../configs/constants/tokens"
import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { BondTokenType } from "../types"
import { setAmountFrom, setAmountTo, setBondToken, setChain, setPurchaseToken } from "./actions"

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

export const useSetAmountFrom = () => {
  const dispatch = useAppDispatch()
  return useCallback((amount: string) => {
    dispatch(setAmountFrom(amount))
  }, [dispatch])
}

export const useSetAmountTo = () => {
  const dispatch = useAppDispatch()
  return useCallback((amount: string) => {
    dispatch(setAmountTo(amount))
  }, [dispatch])
}