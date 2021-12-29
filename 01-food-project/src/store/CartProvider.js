import React, { useReducer } from "react";
import CartContext from "./cart-context";

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.amount * item.price, 0);
};

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let newItems = [...state.items, action.item];

    const existing = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (existing > -1) {
      const prev = state.items[existing];
      const updated = { ...prev, amount: prev.amount + action.item.amount };
      newItems = [
        ...state.items.filter((item) => item.id !== action.item.id),
        updated,
      ];
    }
    return {
      items: newItems,
      totalAmount: calculateTotalAmount(newItems),
    };
  } else if (action.type === "REMOVE") {
    const newItems = [...state.items.filter((item) => item.id !== action.id)];
    const existing = state.items.findIndex((item) => item.id === action.id);
    if (existing > -1) {
      const prev = state.items[existing];
      const updated = { ...prev, amount: prev.amount - 1 };
      if (updated.amount > 0) {
        newItems.push(updated);
      }
    }
    return {
      items: newItems,
      totalAmount: calculateTotalAmount(newItems),
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState);

  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      cartDispatcher({ type: "ADD", item });
    },
    removeItem: (id) => {
      cartDispatcher({ type: "REMOVE", id });
    },
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
