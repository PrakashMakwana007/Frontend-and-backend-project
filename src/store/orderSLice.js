import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // Stores ordered items
  totalAmount: 0, // Tracks total order cost
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      const item = action.payload;
      const price = Number(item.price.replace(/\D/g, "")); // Extract digits safely

      const existingItem = state.orders.find((order) => order.name === item.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.orders.push({ ...item, quantity: 1 });
      }

      state.totalAmount += price;
    },

    removeFromOrder: (state, action) => {
      const itemName = action.payload;
      const itemIndex = state.orders.findIndex((item) => item.name === itemName);

      if (itemIndex !== -1) {
        const price = Number(state.orders[itemIndex].price.replace(/\D/g, ""));

        if (state.orders[itemIndex].quantity > 1) {
          state.orders[itemIndex].quantity -= 1;
        } else {
          state.orders.splice(itemIndex, 1);
        }

        state.totalAmount -= price;
      }
    },

    clearOrder: (state) => {
      state.orders = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToOrder, removeFromOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
