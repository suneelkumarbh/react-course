import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import authSlice from './auth';
const store = configureStore({
  reducer: { counter: counterReducer, auth: authSlice },
});
export default store;
