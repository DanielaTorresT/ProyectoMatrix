import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // Simple check for example, replace with your real authentication logic
    if (email === 'user@example.com' && password === 'password123') {
      localStorage.setItem('user', email);
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
