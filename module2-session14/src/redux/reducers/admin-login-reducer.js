import { createSlice } from "@reduxjs/toolkit";

const adminLoginReducer = createSlice({
  name: "adminLoginReducer",
  initialState: false,
  reducers: {
    isLogin: (state, action) => {
      // action = { type: String, payload: any};
      return true;
    },

    isLogout: (state, action) => {
      // action = { type: String, payload: any};
      return false;
    },
  },
});

export const { isLogin, isLogout } = adminLoginReducer.actions;
export default adminLoginReducer.reducer;
