import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [cart, setCart] = useState([]);

  const addToFavorite = (item) => {
    setState((prev) => {
      const isItemInCart = prev.some((cartItem) => cartItem.id === item.id);
      if (isItemInCart) {
        return prev.filter((cartItem) => cartItem.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const isItemInCart = prev.some((cartItem) => cartItem.id === item.id);
      if (isItemInCart) {
        return prev.filter((cartItem) => cartItem.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <CardContext.Provider value={{ state, addToFavorite, cart, addToCart }}>
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
