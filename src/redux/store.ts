import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "./slice";

export const store = configureStore({
  reducer: {
    skill: skillReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
