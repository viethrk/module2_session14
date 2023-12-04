import { configureStore } from "@reduxjs/toolkit";
import adminLoginReducer from "./reducers/admin-login-reducer";

export default configureStore({
  reducer: {
    isAdminLoginState: adminLoginReducer,
  },
});
