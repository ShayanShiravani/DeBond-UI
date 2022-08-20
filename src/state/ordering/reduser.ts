import { createReducer } from "@reduxjs/toolkit";
import { getValidChains } from "../../configs/constants/chains";
import { OrderingState } from "../types";
import { setBondToken, setChain, setPurchaseToken } from "./actions";
import { BOND_TOKEN, PURCHASE_TOKEN } from "../../configs/constants/tokens";

const validChains = getValidChains()
const defaultChain = validChains[0]

const initialState: OrderingState = {
  chain: defaultChain,
  purchaseToken: PURCHASE_TOKEN[defaultChain],
  bondToken: {
    symbol: BOND_TOKEN.symbol,
    decimal: BOND_TOKEN.decimal,
    iconPath: BOND_TOKEN.iconPath,
    address: BOND_TOKEN.address[defaultChain]
  }
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
)