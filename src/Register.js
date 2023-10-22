// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './slices/userSlice';

function Register({ onRegister }) {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleRegister = () => {
    // Implement your registration logic here
    // You can redirect the user to a registration page or show a registration form.
    onRegister(username);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
