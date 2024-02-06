
export function getCartCount(cartItems){
    return cartItems.reduce((count, item) => count + item.quantity, 0);
}

export function getCartTotal(cartItems){
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
}