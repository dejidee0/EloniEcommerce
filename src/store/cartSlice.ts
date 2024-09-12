// src/store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      state.totalAmount += newItem.price * newItem.quantity;
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalAmount += existingItem.price;
      }
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalAmount -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
        state.totalAmount -= existingItem.price;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
