import { configureStore, createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "show-cart",
  initialState: { showCart: false },
  reducers: {
    showCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
  },
});
const store = configureStore({ reducer: showCartSlice.reducer });

export const showCartActions = showCartSlice.actions;
export default store;
