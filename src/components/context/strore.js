import { configureStore } from "@reduxjs/toolkit";
// import heartSlice from "./heartSlice";
// import cartSlice from './cartSlice'
import {api} from './Api/index'

export const store = configureStore({
  reducer: {
    // heart: heartSlice,
    // cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});