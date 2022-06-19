import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = "/login",
  redirectAdmin = "/login",
}) => {
  let Navigate = useNavigate();
  if (!isAuthenticated) {
    return Navigate(redirect)
  }

  if (adminRoute && !isAdmin) {
    return Navigate(redirectAdmin) 
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;