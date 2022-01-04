import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { notification: null },
  reducers: {
    notify: (state, action) => {
      state.notification = action.payload;
    },
    clear: (state, action) => {
      state.notification = null;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
