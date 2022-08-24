import { createReducer } from "@reduxjs/toolkit";
import { getValidChains } from "../../configs/constants/chains";
import { OrderingState } from "../types";
import { setAmountFrom, setAmountTo, setBondToken, setChain, setPurchaseToken } from "./actions";
import { BOND_TOKEN, PURCHASE_TOKEN } from "../../configs/constants/tokens";

const validChains = getValidChains()
const defaultChain = validChains[0]

const initialState: OrderingState = {
  chain: defaultChain,
  purchaseToken: PURCHASE_TOKEN[defaultChain],
  bondToken: {
    ...BOND_TOKEN,
    address: BOND_TOKEN.address[defaultChain]
  },
  amountFrom: "",
  amountTo: ""
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(
      setChain,
      (state, { payload }) => {
        return {
          ...state,
          chain: payload
        }
      },
    )
    .addCase(
      setPurchaseToken,
      (state, { payload }) => {
        return {
          ...state,
          purchaseToken: payload
        }
      }
    )
    .addCase(
      setBondToken,
      (state, { payload }) => {
        return {
          ...state,
          bondToken: payload
        }
      }
    )
    .addCase(
      setAmountFrom,
      (state, { payload }) => {
        return {
          ...state,
          amountFrom: payload
        }
      }
    )
    .addCase(
      setAmountTo,
      (state, { payload }) => {
        return {
          ...state,
          amountTo: payload
        }
      }
    )
)