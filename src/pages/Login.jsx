import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../assets/css/auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mengambil data user dari localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      login(matchedUser);
      alert('Login berhasil!');
      navigate('/analyze'); // Redirect ke halaman analyze setelah login
    } else {
      alert('Email atau password salah');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
      <p className="auth-link">Belum punya akun? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login; 