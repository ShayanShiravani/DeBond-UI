import { useAppSelector } from "state/hooks"

export const useAuctionState = () => {
  return useAppSelector((state) => state.auction)
}