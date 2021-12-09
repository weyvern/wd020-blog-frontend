import { Outlet, Navigate } from 'react-router';

const ProtectedRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
