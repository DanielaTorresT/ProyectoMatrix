import React from 'react';
import { Link } from 'react-router-dom';  // Using Link from react-router-dom for navigation
import '../styles.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Bienvenido a la Recolección de Datos</h1>
      <p>Cuales datos desea ingresar?</p>
      <ul>
      <li>
          <Link to="/signin">Iniciar Sesión</Link> {/* Link to the SignIn page */}
        </li>
        <li>
          <Link to="/iniciales">Datos Iniciales</Link>
        </li>
        <li>
          <Link to="/reporte">Reporte</Link>
        </li>
        <li>
          <Link to="/contacto">Datos de Contacto</Link>
        </li>
        <li>
          <Link to="/fallecido">Datos del Fallecido</Link>
        </li>
        <li>
          <Link to="/client-info">Clientes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
