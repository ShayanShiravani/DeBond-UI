import { createAction } from "@reduxjs/toolkit";
import { PurchaseTokenType } from "../../configs/constants/tokens";
import { BondTokenType } from "../types";

export const setChain = createAction< number >('ordering/setChain')

export const setPurchaseToken = createAction< PurchaseTokenType >('ordering/setPurchaseToken')

export const setBondToken = createAction< BondTokenType >('ordering/setBondToken')

export const setAmountFrom = createAction< string >('ordering/setAmountFrom')

export const setAmountTo = createAction< string >('ordering/setAmountTo')