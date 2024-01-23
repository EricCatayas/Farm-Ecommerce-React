import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
// TODO 
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const productToAdd = action.payload;

      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );

      if (existingCartItem) {
        // If the item already exists in the cart, update its quantity
        existingCartItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.cartItems.push({ ...productToAdd, quantity: 1 });
      }

      // Update cartCount and cartTotal based on the updated cartItems
      state.cartCount = state.cartItems.reduce(
        (count, item) => count + item.quantity,
        0
      );

      state.cartTotal = state.cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
