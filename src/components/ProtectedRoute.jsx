import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import LoadingIndicator from './shared/LoadingIndicator';

const ProtectedRoute = ({ children, user, loading }) => {
  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <LoadingIndicator />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
