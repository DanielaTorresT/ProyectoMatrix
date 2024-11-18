// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Verificamos si el usuario está autenticado (esto puede variar según tu lógica de autenticación)
  if (!localStorage.getItem('user')) {
    navigate('/signin'); // Si no está autenticado, redirigimos al sign-in
  }

  return (
    <div>
      <h2>Bienvenido al Dashboard</h2>
      <p>Esta página solo es accesible para usuarios autenticados.</p>
    </div>
  );
};

export default Dashboard;
