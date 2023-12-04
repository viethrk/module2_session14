import logo from "./logo.svg";
import "./App.css";
import UserManager from "./pages/site-admin/user-manager";
import AdminLoginPage from "./pages/site-admin/auth/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLoginPage />} />
          <Route path="/admin" element={<UserManager />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
