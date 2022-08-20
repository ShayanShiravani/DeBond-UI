import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setChain } from "./actions"

export const useClaimingState = () => {
  return useAppSelector((state) => state.claiming)
}

export const useSetChain = () => {
  const dispatch = useAppDispatch()
  return useCallback((chainId: number) => {
    dispatch(setChain(chainId))
  }, [dispatch]) //eslint-disable-line
}