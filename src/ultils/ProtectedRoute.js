import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token, user } = useSelector((store) => store.user);

  if (!token) {
    return <Navigate to="/landing" />;
  }
  if (user) {
    user.hasRoles.map((item) => {
      console.log(item.roleId);
      if (item.roleId === 0) {
        return <Navigate to="/admin/admin-dashboard" />;
      } else if (item.roleId === 1) {
        console.log("hi");
        return <Navigate to="/staff/staff-dashboard" />;
      } else if (item.roleId === 2) {
        return <Navigate to="/store/store-dashboard" />;
      }
    });
  }
  return children;
};

export default ProtectedRoute;
