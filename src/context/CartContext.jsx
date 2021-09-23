import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const index = cart.findIndex((i) => i.item.id === item.id);
    if (index > -1) {
      const oldQy = cart[index].quantity;

      cart.splice(index, 1);
      setCart([...cart, { item, quantity: quantity + oldQy }]);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const cartFilter = cart.filter((element) => element.item.id !== itemId);
    return setCart(cartFilter);
  };

  const iconCart = () => {
    return cart.reduce((acum, valor) => acum + valor.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (acum, valor) => acum + valor.quantity * valor.item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, iconCart, addToCart, removeItem, setCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
