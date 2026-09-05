import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface StoreState {
  themeColor: string;
}

const initialState: StoreState = {
  themeColor: "#ff6b4a",
};

export const storeSlice: Slice<StoreState> = createSlice({
  name: "store",
  initialState,
  reducers: {
    setThemeColor: (state, action: PayloadAction<string>) => {
      state.themeColor = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("themeColor", action.payload);
      }
    },
  },
});

export const { setThemeColor } = storeSlice.actions;

export default storeSlice.reducer;
