import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../featurs/cartSlice";
import productSlice from "../featurs/productSlice";


const reducers = {
  reducer:{
    product:productSlice,
    cart:cartSlice
  }
}

export const store = configureStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 