import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterReducer.reducer });

export const counterActions = counterReducer.actions;
export default store;
