import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layouts";
import { Inventory, Login } from "../pages";
import { AuthService } from "../services";
import { useEffect, useState } from "react";

export const Router = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.isAuthenticated()
  );
  const privateRoute = (Component) =>
    isAuthenticated ? <Component /> : <Login />;
  useEffect(() => {
    setIsAuthenticated(AuthService.isAuthenticated())
  }, [navigate]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={privateRoute(AuthLayout)} />
      <Route path="/dashboard" element={privateRoute(AuthLayout)} />
      <Route path="/inventory" element={privateRoute(Inventory)} />
    </Routes>
  );
};
