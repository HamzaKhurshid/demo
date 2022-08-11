import { Navigate } from 'react-router-dom';

import Login from '../modules/Authentication/Login';
import Register from '../modules/Authentication/SignUp';
import Dashboard from '../modules/Dashboard';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('user_token');
  if (!token) return <Navigate to="/podcast/auth/login" replace />;
  return children;
};

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem('user_token');
  if (token) return <Navigate to="/podcast/dashboard" replace />;
  return children;
};

const podcastRoutes = [{
  key: 'login',
  path: '/podcast/auth/login',
  component: <AuthRoute><Login /></AuthRoute>
}, {
  key: 'register',
  path: '/podcast/auth/register',
  component: <AuthRoute><Register /></AuthRoute>
}, {
  key: 'dashboard',
  path: '/podcast/dashboard',
  component: <ProtectedRoute><Dashboard /></ProtectedRoute>
}];

export default podcastRoutes;