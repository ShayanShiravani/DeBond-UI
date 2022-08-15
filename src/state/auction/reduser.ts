import { createReducer } from "@reduxjs/toolkit";
import { AuctionState } from "state/types";
import { setAuctionEndDate } from "./actions";

const initialState: AuctionState = {
  endDate: ""
}

export default createReducer<AuctionState>(initialState, (builder) =>
  builder
    .addCase(
      setAuctionEndDate,
      (state, { payload }) => {
        return {
          ...state,
          endDate: payload.endDate
        }
      },
    )
)