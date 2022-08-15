import { createAction } from "@reduxjs/toolkit";

export const setAuctionEndDate = createAction<{ endDate: string }>('auction/setAuctionEndDate')