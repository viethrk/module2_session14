import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/site-admin/auth/login";
import UserManager from "../pages/site-admin/user-manager";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLoginPage />} />
      <Route path="/admin" element={<UserManager />} />
    </Routes>
  );
};

export default AdminRoute;
