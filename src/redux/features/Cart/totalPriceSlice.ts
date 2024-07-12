import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

export interface TTotalPrice {
  data: number[];
  total: number | null;
}

const initialState: TTotalPrice = {
  data: [],
  total: null,
};

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    totalCount: (state, action) => {
      const payload = action.payload;
      state.data.push(payload);
      state.total = state.data.reduce((acc, cur) => acc + cur, 0);
    },
    removeCount: (state, action) => {
      const value = state.data.indexOf(action.payload);

      if (value > -1) {
        state.data.splice(value, 1);
        if (state.total) {
          state.total = state.total - action.payload;
        }
      }
    },
  },
});

export const { totalCount, removeCount } = totalPriceSlice.actions;
export const priceData = (state: RootState) => state.totalPrice;
export default totalPriceSlice.reducer;
