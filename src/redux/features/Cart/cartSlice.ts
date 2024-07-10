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
      const isExist = state.find((item) => item.productId === productId);
      if (isExist) {
        state.map((item) => {
          if (item.productId === productId) {
            item.productId = productId;
            item.quantity = item.quantity + quantity;
          } else {
            state.push({
              productId: productId,
              quantity: quantity,
            });
          }
        });
      } else {
        const data = {
          productId: productId,
          quantity: quantity,
        };
        state.push(data);
      }
    },
    removeCart: (state, action) => {
      state = state.filter((item) => item.productId !== action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const cartData = (state: RootState) => state.cart;
export default cartSlice.reducer;
