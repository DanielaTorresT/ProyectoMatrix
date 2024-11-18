import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Iniciales from './pages/Iniciales';
import Fallecido from './pages/Fallecido';
import Contacto from './pages/Contacto';
import Reporte from './pages/Reporte';
import ClientInfo from './pages/ClientInfo';  // Import the ClientInfo component

const PageNavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the pages in the specific order for navigation
  const pages = ['/home', '/Iniciales', '/Reporte', '/Contacto', '/Fallecido', '/client-info'];
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
      <button
        disabled={currentIndex <= 0}  // Disable 'Previous' if it's the first page
        onClick={() => navigate(pages[currentIndex - 1])}
      >
        Previous
      </button>
      <button
        disabled={currentIndex >= pages.length - 1}  // Disable 'Next' if it's the last page
        onClick={() => navigate(pages[currentIndex + 1])}
      >
        Next
      </button>
    </div>
  );
};

const LogoutButton = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage and update the authentication state
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    // Redirect to the sign-in page after logging out
    navigate('/signin');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clientData, setClientData] = useState({
    name: '',
    coordinator: '',
    date: '',
    time: '',
    status: '',
    justification: ''
  });

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);  // Check if user is authenticated
  }, []);

  return (
    <Router>
      <Routes>
        {/* If the user is authenticated, show protected routes */}
        {isAuthenticated ? (
          <>
            <Route 
              path="/home" 
              element={
                <>
                  <Home />
                  <PageNavigationButtons />
                  <LogoutButton setIsAuthenticated={setIsAuthenticated} />
                </>
              } 
            />
            <Route path="/Iniciales" element={<><Iniciales /><PageNavigationButtons /></>} />
            <Route path="/Fallecido" element={<><Fallecido /><PageNavigationButtons /></>} />
            <Route path="/Contacto" element={<><Contacto /><PageNavigationButtons /></>} />
            <Route path="/Reporte" element={<><Reporte /><PageNavigationButtons /></>} />
            <Route path="/client-info" element={<><ClientInfo /><PageNavigationButtons /></>} /> {/* Add route for ClientInfo */}
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
    </Router>
  );
};

export default App;
