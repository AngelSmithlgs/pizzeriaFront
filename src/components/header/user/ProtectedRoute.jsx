/* eslint-disable react/prop-types */
import { Navigate, Route } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const ProtectedRoute = ({ element }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route element={element} />;
};

export default ProtectedRoute;
