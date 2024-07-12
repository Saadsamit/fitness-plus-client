import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface TInitialState {
  productId: string;
  quantity: number;
}

const initialState: TInitialState[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const productId = action.payload?.productId;
      const quantity = action.payload?.quantity;
      const isExist = state.findIndex((item) => item.productId === productId);
      if (isExist === -1) {
        const data = {
          productId: productId,
          quantity: quantity,
        };
        state.push(data);
      } else {
        state.map((item) => {
          if (item.productId === productId) {
            item.quantity = item.quantity + quantity;
          }
        });
      }
    },
    removeCart: (state, action) => {
      return state.filter((item) => item.productId !== action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const cartData = (state: RootState) => state.cart;
export default cartSlice.reducer;
