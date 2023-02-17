import React from "react";
import { Outlet, Navigate } from "react-router";

function ProtectedRoute() {
  const user = JSON.parse(localStorage.getItem("loggedin"));
  //   const navigate = useNavigate();
  return user ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
