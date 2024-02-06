import { createSlice } from "@reduxjs/toolkit";
import { getCartCount, getCartTotal } from "../utils/cart.utils";

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
      
      state.cartCount = getCartCount(state.cartItems);
      state.cartTotal = getCartTotal(state.cartItems);
    },
    setCartItems: (state, action) => {
      const items = action.payload;

      state.cartItems = items;
      state.cartCount = getCartCount(state.cartItems);
      state.cartTotal = getCartTotal(state.cartItems);
    },
    setIsCartOpen(state, action){
      state.isCartOpen = action.payload;
    }
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
