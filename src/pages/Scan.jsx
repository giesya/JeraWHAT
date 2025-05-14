import React, { useState, useRef } from 'react';
import '../assets/css/scan.css';
import { useAuth } from '../context/AuthContext';

const Scan = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const analyzeImage = () => {
    setLoading(true);
    // Simulasi analisis
    setTimeout(() => {
      const severity = Math.random() < 0.33 ? 'mild' : Math.random() < 0.66 ? 'moderate' : 'severe';
      const percentage = Math.floor(Math.random() * 100);
      const result = {
        severity,
        percentage,
        recommendations: foodRecommendations[severity],
        date: new Date().toISOString()
      };
      
      // Simpan ke history
      const history = JSON.parse(localStorage.getItem(`scan_history_${user.email}`)) || [];
      history.unshift(result);
      localStorage.setItem(`scan_history_${user.email}`, JSON.stringify(history));
      
      setAnalysis(result);
      setLoading(false);
    }, 2000);
  };

  // ... rest of the component
};

export default Scan; 