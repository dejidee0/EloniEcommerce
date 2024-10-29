// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import purchasesReducer from "./purchasesSlice";
import formReducer from './formSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    purchases: purchasesReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
