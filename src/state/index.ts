import { configureStore } from '@reduxjs/toolkit'
import ordering  from './ordering/reduser'
import claiming from './claiming/reducer'

export const store = configureStore({
  reducer: {
    ordering,
    claiming
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch