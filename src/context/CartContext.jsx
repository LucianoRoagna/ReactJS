import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateCart = [...cart];

      updateCart.forEach((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
        }
      });
      setCart(updateCart);
    } else {
      setCart([...cart,  {item, quantity} ]);
    }
  };

  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };

  const removeItem = (itemId) => {
    const cartFilter = cart.filter((element) => element.item.id !== itemId);
    return setCart(cartFilter);
  };

  return (
    <CartContext.Provider value={{ addToCart, removeItem, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
