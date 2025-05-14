import React from 'react';

const Article = () => {
  return (
    <main className="main">
      <section className="new section" id="new">
        <h2 className="section__title">Artikel Terbaru</h2>
        <div className="new__container container">
          <div className="swiper new-swiper">
            <div className="swiper-wrapper">
              {/* ... existing article content ... */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Article; 