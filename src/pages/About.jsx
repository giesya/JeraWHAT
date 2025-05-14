import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="main">
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title about__title">Tentang Kami</h2>
            <p className="about__description">
              JeraWHAT?! adalah platform yang membantu Anda mengatasi masalah jerawat dengan cara yang mudah dan efektif.
            </p>
            <Link to="/learn-more" className="button">Pelajari Lebih Lanjut</Link>
          </div>
          <img src="assets/img/about-img.png" alt="" className="about__img" />
        </div>
      </section>
    </main>
  );
};

export default About; 