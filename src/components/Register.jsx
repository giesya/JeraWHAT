import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registrasi berhasil! Silakan login.');
      navigate('/login');
    } else {
      alert('Password tidak cocok!');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="input-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Masukkan email" 
            required 
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Masukkan password" 
            required 
          />
        </div>
        <div className="input-group">
          <label>Konfirmasi Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Masukkan ulang password" 
            required 
          />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
      <p className="auth-link">Sudah punya akun? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
