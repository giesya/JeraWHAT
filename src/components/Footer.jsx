import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer section prefooter">
    <div className="footer__container container grid">
      <div className="footer__content">
        <Link to="/" className="footer__logo">
          <img src="assets/img/logo.png" alt="" className="footer__logo-img" />
          JeraWHAT?!
        </Link>
        <p className="footer__description">Enjoy the prettiest night <br /> of your life.</p>
        <div className="footer__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className='bx bxl-instagram-alt'></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className='bx bxl-twitter'></i>
          </a>
        </div>
      </div>
      <div className="footer__content">
        <h3 className="footer__title">About</h3>
        <ul className="footer__links">
          <li>
            <Link to="/about" className="footer__link">About Us</Link>
          </li>
          <li>
            <Link to="/features" className="footer__link">Features</Link>
          </li>
          <li>
            <Link to="/news" className="footer__link">News</Link>
          </li>
        </ul>
      </div>
      <div className="footer__content">
        <h3 className="footer__title">Our Services</h3>
        <ul className="footer__links">
          <li>
            <Link to="/scanner" className="footer__link">Scanner</Link>
          </li>
          <li>
            <Link to="/rate" className="footer__link">Rate</Link>
          </li>
          <li>
            <Link to="/subscribe" className="footer__link">Subscribe</Link>
          </li>
        </ul>
      </div>
      <div className="footer__content">
        <h3 className="footer__title">Our Company</h3>
        <ul className="footer__links">
          <li>
            <Link to="/blog" className="footer__link">Blog</Link>
          </li>
          <li>
            <Link to="/about" className="footer__link">About us</Link>
          </li>
          <li>
            <Link to="/mission" className="footer__link">Our mission</Link>
          </li>
        </ul>
      </div>
      <img src="assets/img/footer1-img.png" alt="" className="footer__img-one" />
      <img src="assets/img/footer2-img.png" alt="" className="footer__img-two" />
    </div>
    <span className="footer__copy">© JeraWHAT?! All rights reserved</span>
  </footer>
);

export default Footer; 