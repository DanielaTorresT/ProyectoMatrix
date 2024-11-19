import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import '../styles.css';

const NavBar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    // Update the authentication state
    setIsAuthenticated(false);
    
    // Redirect to the sign-in page
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add your logo or home link here */}
        <Link to="/home">Home</Link>
        <Link to="/client-info">Clientes</Link>
        <Link to="/iniciales">Datos Iniciales</Link>
        <Link to="/reporte">Reporte</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/fallecido">Fallecido</Link>
      </div>
      <div className="navbar-right">
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
