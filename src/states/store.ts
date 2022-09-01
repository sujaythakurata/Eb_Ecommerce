import { configureStore } from "@reduxjs/toolkit";


const reducers = {
  reducer:{}
}

export const store = configureStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 