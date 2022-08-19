import { createAction } from "@reduxjs/toolkit";
import { PurchaseTokenType } from "configs/constants/tokens";
import { BondTokenType } from "state/types";

export const setChain = createAction< number >('ordering/setChain')

export const setPurchaseToken = createAction< PurchaseTokenType >('ordering/setPurchaseToken')

export const setBondToken = createAction< BondTokenType >('ordering/setBondToken')