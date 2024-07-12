import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import cartSlice from "./features/Cart/cartSlice";
import totalPriceSlice from "./features/Cart/totalPriceSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    totalPrice: totalPriceSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
