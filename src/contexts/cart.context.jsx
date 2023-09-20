import { createContext, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
});

export const CART_ACTION_TYPES = {
  TOGGLE_CART: "TOGGLE_CART",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  const newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }];
  return newCartItems;
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal, isCartOpen } = state;

  const updateCartReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems: newCartItems,
      cartTotal: newCartTotal,
      cartCount: newCartCount,
    };

    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload });
  };

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    updateCartReducer(newCartItems);
  };

  const removeItemFromCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateCartReducer(newCartItems);
  };
  const toggleCart = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART });
  };

  const value = {
    cartItems,
    isCartOpen,
    cartTotal,
    cartCount,
    setIsCartOpen: toggleCart,
    addItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
