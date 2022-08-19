import { createReducer } from "@reduxjs/toolkit";
import { WalletState } from "../types";
import { setDestBalance, setOriginBalance } from "./actions";

const initialState: WalletState = {
  originBalance: "0",
  destBalance: "0"
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(
      setOriginBalance,
      (state, { payload }) => {
        return {
          ...state,
          originBalance: payload
        }
      }
    )
    .addCase(
      setDestBalance,
      (state, { payload }) => {
        return {
          ...state,
          destBalance: payload
        }
      }
    )
})