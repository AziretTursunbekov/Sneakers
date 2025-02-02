import React, { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (item) => {
    setCartItems((prev) => {
      const isItemInCart = prev.some((cartItem) => cartItem.id === item.id);
      if (isItemInCart) {
        return prev.filter((cartItem) => cartItem.id !== item.id)
      } else {
        return [...prev, item]; 
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};