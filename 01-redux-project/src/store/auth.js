import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      console.log(action.payload);
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
