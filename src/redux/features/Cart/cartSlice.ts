import { RootState } from "@/redux/store";
import { TCart } from "@/types/TCart";
import { createSlice } from "@reduxjs/toolkit";

export interface TCartObj extends TCart {
  price: number;
}

const initialState: TCartObj[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const productId = action.payload?.productId;
      const quantity = action.payload?.quantity;
      const price = action.payload?.price;
      const isExist = state.findIndex((item) => item.productId === productId);
      if (isExist === -1) {
        const data = {
          productId,
          quantity,
          price,
        };
        state.push(data);
      } else {
        state.map((item) => {
          if (item.productId === productId) {
            item.quantity = quantity;
            item.price = price;
          }
        });
      }
    },
    removeCart: (state, action) => {
      return state.filter((item) => item.productId !== action.payload);
    },
    removeAllCart: () => {
      return []
    },
  },
});

export const { addCart, removeCart, removeAllCart } = cartSlice.actions;
export const cartData = (state: RootState) => state.cart;
export default cartSlice.reducer;
