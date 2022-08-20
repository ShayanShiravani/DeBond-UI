import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setDestBalance, setOriginBalance } from "./actions"

export const useWalletState = () => {
  return useAppSelector((state) => state.wallet)
}

export const useSetOriginBalance = () => {
  const dispatch = useAppDispatch()
  return useCallback((balance: string) => {
    dispatch(setOriginBalance(balance))
  }, [dispatch])
}

export const useSetDestBalance = () => {
  const dispatch = useAppDispatch()
  return useCallback((balance: string) => {
    dispatch(setDestBalance(balance))
  }, [dispatch])
}