import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for navigation
import '../styles.css';

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <h1>Bienvenido a la Vitácora de Matrix Assit</h1>
        <p>¿Qué datos desea ingresar?</p>
        <ul>
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
    </div>
  );
};

export default Home;
