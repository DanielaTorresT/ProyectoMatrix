import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Iniciales from './pages/Iniciales';
import Fallecido from './pages/Fallecido';
import Contacto from './pages/Contacto';
import Reporte from './pages/Reporte';
import ClientInfo from './pages/ClientInfo';  // Import the ClientInfo component
import NavBar from './pages/Navbar';  // Import the NavBar component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);  // Check if user is authenticated
  }, []);

  return (
    <Router>
      <div>
        {/* Conditionally render the NavBar only if the user is authenticated */}
        {isAuthenticated && <NavBar setIsAuthenticated={setIsAuthenticated} />}

        <Routes>
          {/* If the user is authenticated, show protected routes */}
          {isAuthenticated ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/client-info" element={<ClientInfo />} />
              <Route path="/Iniciales" element={<Iniciales />} />
              <Route path="/Reporte" element={<Reporte />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/Fallecido" element={<Fallecido />} />

              {/* Default redirect to home */}
              <Route path="/" element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
              {/* If not authenticated, redirect to sign-in page */}
              <Route path="/" element={<Navigate to="/signin" />} />
              <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
