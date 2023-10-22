import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Feed from './Feed';
import Register from './Register'

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleRegister = () => {
    
  }

  return (
    <Router>
      <div className="App">
        <h1>Political Junkie</h1>
        <Routes>
          <Route
            path="/"
            element={user ? <Feed username={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register onRegister={handleRegister} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
