import { createAction } from "@reduxjs/toolkit";

export const setOriginBalance = createAction<string>("wallet/setOriginBalance")

export const setDestBalance = createAction<string>("wallet/setDestBalance")