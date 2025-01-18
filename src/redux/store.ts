import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "./slice";

export const store = configureStore({
  reducer: {
    skill: skillReducer,
  },
});
