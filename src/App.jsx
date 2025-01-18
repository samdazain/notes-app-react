import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { protectedRoutes, publicRoutes } from './routes';
import { AppProvider } from './providers/AppProvider';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';

const App = () => {
  const { loading, user } = useAuth();

  return (
    <AppProvider>
      <Router>
        <Navigation />
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          {protectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute user={user} loading={loading}>
                  {route.element}
                </ProtectedRoute>
              }
            />
          ))}
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
