/* eslint-disable react/prop-types */
import { Route, Navigate, useNavigate } from "react-router-dom";  // Asegúrate de tener useNavigate aquí
import { useUserAuth } from "../../context/UserAuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ element }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      navigate("/login");
    }
  }, [user, navigate]);

  return user ? <Route element={element} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
