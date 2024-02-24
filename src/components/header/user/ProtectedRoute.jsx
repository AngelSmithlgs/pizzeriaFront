/* eslint-disable react/prop-types */
import { Route, Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ element }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {

      navigate("/login");
    }
  }, [user, navigate]);

  return user ? <Route element={element} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
