import React from "react";
import { Navigate } from "react-router-dom";

let auth;
auth = true;

const PrivateRoute = ({ component: Component }) => {
  return auth ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;
