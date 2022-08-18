import { createReducer } from "@reduxjs/toolkit";
import { getValidChains } from "configs";
import { OrderingState } from "state/types";
import { setChain } from "./actions";

const validChains = getValidChains()

const initialState: OrderingState = {
  chain: validChains[0]
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
)