import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    // Update the authentication state
    setIsAuthenticated(false);
    
    // Redirect to the sign-in page
    navigate('/signin');
  };

  return (
    <button onClick={handleLogout} style={{ padding: '5px 10px', fontSize: '14px' }}>
      Logout
    </button>
  );
};

export default LogoutButton;
