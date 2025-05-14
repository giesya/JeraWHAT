import React from 'react';
import { useAuth } from '../context/AuthContext';

const History = () => {
  const { user } = useAuth();
  // Ambil data history dari localStorage
  const history = JSON.parse(localStorage.getItem(`scan_history_${user.email}`)) || [];

  return (
    <main className="main">
      <section className="history section">
        <div className="history__container container">
          <h2 className="section__title">Riwayat Scan</h2>
          
          {history.length === 0 ? (
            <p className="history__empty">Belum ada riwayat scan</p>
          ) : (
            <div className="history__list">
              {history.map((item, index) => (
                <div key={index} className="history__item">
                  <div className="history__date">
                    {new Date(item.date).toLocaleString('id-ID')}
                  </div>
                  {item.image && (
                    <img src={item.image} alt="Hasil Analyze" style={{maxWidth: 150, borderRadius: 8, margin: '1rem 0'}} />
                  )}
                  <div className="history__result">
                    <div className="history__severity">
                      <span className="history__percentage">{item.percentage}%</span>
                      <span className="history__category">
                        {item.severity === 'mild' ? 'Ringan' : 
                         item.severity === 'moderate' ? 'Sedang' : 'Parah'}
                      </span>
                    </div>
                    <div className="history__recommendations">
                      <h4>Rekomendasi:</h4>
                      <ul>
                        {item.recommendations.map((food, idx) => (
                          <li key={idx}>{food.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default History; 