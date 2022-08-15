import { configureStore } from '@reduxjs/toolkit'
import auction  from './auction/reduser'

export const store = configureStore({
  reducer: {
    auction
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch