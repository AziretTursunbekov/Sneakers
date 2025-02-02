import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prev) => {
      const isItemInCart = prev.some((cartItem) => cartItem.id === item.id);
      if (isItemInCart) {
        return prev.filter((cartItem) => cartItem.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <CardContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
