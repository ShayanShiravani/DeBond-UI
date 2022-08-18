import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "state/hooks"
import { setChain } from "./actions"

export const useOrderingState = () => {
  return useAppSelector((state) => state.ordering)
}

export const useSetChain = () => {
  const dispatch = useAppDispatch()
  return useCallback((chainId: number) => {
    dispatch(setChain(chainId))
  }, [dispatch]) //eslint-disable-line
}