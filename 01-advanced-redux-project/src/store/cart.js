import { createSlice } from "@reduxjs/toolkit";

const modifyQuantity = (product, quantity) => {
  product.quantity += quantity;
  product.total = product.quantity * product.price;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload.item;
      const items = state.items;

      const existIndex = state.items.findIndex((i) => i.id === item.id);
      if (existIndex > -1) {
        modifyQuantity(items[existIndex], 1);
      } else {
        items.push({
          id: item.id,
          title: item.title,
          price: item.price,
          total: item.price,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload.id;
      const items = state.items;

      const existIndex = state.items.findIndex((i) => i.id === id);
      if (existIndex > -1) {
        const item = items[existIndex];
        if (item.quantity > 1) {
          modifyQuantity(item, -1);
        } else {
          items.pop(existIndex);
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
