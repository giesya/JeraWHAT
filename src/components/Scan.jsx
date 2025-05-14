import React, { useState, useRef } from 'react';
import '../assets/css/scan.css';

const Scan = () => {
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  // Data rekomendasi makanan berdasarkan kategori jerawat
  const foodRecommendations = {
    mild: [
      { name: "Ikan Salmon", benefit: "Kaya omega-3 yang membantu mengurangi peradangan" },
      { name: "Alpukat", benefit: "Mengandung vitamin E yang baik untuk kulit" },
      { name: "Brokoli", benefit: "Kaya antioksidan dan vitamin C" }
    ],
    moderate: [
      { name: "Yogurt", benefit: "Probiotik membantu kesehatan usus dan kulit" },
      { name: "Kacang Almond", benefit: "Sumber vitamin E dan zinc" },
      { name: "Bayam", benefit: "Kaya zat besi dan vitamin A" }
    ],
    severe: [
      { name: "Kunyit", benefit: "Anti-inflamasi alami" },
      { name: "Teh Hijau", benefit: "Antioksidan tinggi" },
      { name: "Biji Chia", benefit: "Omega-3 dan serat tinggi" }
    ]
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setShowCamera(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Tidak dapat mengakses kamera. Pastikan Anda memberikan izin.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setShowCamera(false);
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
      const imageUrl = canvas.toDataURL('image/jpeg');
      setImage(imageUrl);
      stopCamera();
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setLoading(true);
    // Simulasi analisis (dalam implementasi nyata, ini akan memanggil API)
    setTimeout(() => {
      const severity = Math.random() < 0.33 ? 'mild' : Math.random() < 0.66 ? 'moderate' : 'severe';
      const percentage = Math.floor(Math.random() * 100);
      setAnalysis({
        severity,
        percentage,
        recommendations: foodRecommendations[severity]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="scan__container container">
      <h2 className="section__title">Analisis Jerawat</h2>
      
      <div className="scan__content grid">
        <div className="scan__image-container">
          {!image && !showCamera && (
            <div className="scan__upload-options">
              <button className="button" onClick={startCamera}>
                <i className='bx bx-camera'></i> Ambil Foto
              </button>
              <button className="button" onClick={() => fileInputRef.current.click()}>
                <i className='bx bx-upload'></i> Upload Gambar
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>
          )}

          {showCamera && (
            <div className="scan__camera-container">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="scan__camera-preview"
              />
              <button className="button scan__capture-btn" onClick={captureImage}>
                <i className='bx bx-camera'></i> Ambil Foto
              </button>
            </div>
          )}

          {image && (
            <div className="scan__preview-container">
              <img src={image} alt="Preview" className="scan__preview" />
              <button className="button scan__retake-btn" onClick={() => setImage(null)}>
                <i className='bx bx-refresh'></i> Ambil Ulang
              </button>
            </div>
          )}
        </div>

        <div className="scan__analysis-container">
          {image && !analysis && (
            <button 
              className="button scan__analyze-btn"
              onClick={analyzeImage}
              disabled={loading}
            >
              {loading ? 'Menganalisis...' : 'Analisa Sekarang'}
            </button>
          )}

          {analysis && (
            <div className="scan__results">
              <div className="scan__severity">
                <h3 className="scan__result-title">Hasil Analisis</h3>
                <div className="scan__percentage">
                  <span className="scan__percentage-value">{analysis.percentage}%</span>
                  <span className="scan__severity-text">
                    {analysis.severity === 'mild' ? 'Ringan' : 
                     analysis.severity === 'moderate' ? 'Sedang' : 'Parah'}
                  </span>
                </div>
              </div>

              <div className="scan__recommendations">
                <h3 className="scan__result-title">Rekomendasi Makanan</h3>
                <ul className="scan__food-list">
                  {analysis.recommendations.map((food, index) => (
                    <li key={index} className="scan__food-item">
                      <h4 className="scan__food-name">{food.name}</h4>
                      <p className="scan__food-benefit">{food.benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scan; 