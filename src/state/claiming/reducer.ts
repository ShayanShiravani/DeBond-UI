import { createReducer } from "@reduxjs/toolkit";
import { getValidChains } from "../../configs/constants/chains";
import { ClaimingState } from "state/types";
import { setChain } from "./actions";

const validChains = getValidChains()

const initialState: ClaimingState = {
  chain: validChains[0]
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(
      setChain,
      (state, { payload }) => {
        return {
          ...state,
          chain: payload
        }
      }
    )
})