import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./features/country/countrySlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
