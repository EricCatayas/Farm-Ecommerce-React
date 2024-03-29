import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.css";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {/* TODO */}
      <div className="btn">GO TO CHECKOUT</div>
    </div>
  );
};

export default CartDropdown;
