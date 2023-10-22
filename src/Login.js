// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './slices/userSlice';
import { Register } from './Register'

function Login({ onLogin }) {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a successful login
    if (username && password) {
      // Replace this with actual user data
      const user = { username, name: username };
      dispatch(setUser(user)); // Dispatch the setUser action
      onLogin(username);
    }
  }

  const handleRegister = () => {
    // Implement your registration logic here
    // You can redirect the user to a registration page or show a registration form.
    //onRegister(username);
  };

  return (
    <div className="login">
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>👉 Not a member? Register Here 👈</button>
    </div>
  );
}

export default Login;
