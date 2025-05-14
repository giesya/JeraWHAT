import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Habbit from './pages/Habbit';
import Article from './pages/Article';
import Analyze from './pages/Analyze';
import Login from './pages/Login';
import Register from './pages/Register';
import History from './pages/History';

function App() {
  useEffect(() => {
    // Inisialisasi Swiper
    import('swiper').then(({ default: Swiper }) => {
      new Swiper('.home-swiper', {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      new Swiper('.new-swiper', {
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 16,
      });
    });

    // Inisialisasi ScrollReveal
    import('scrollreveal').then((ScrollReveal) => {
      ScrollReveal.default({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
      }).reveal(`.home-swiper, .new-swiper, .newsletter__container`);
      ScrollReveal.default().reveal(`.category__data, .habbit__content, .footer__content`, { interval: 100 });
      ScrollReveal.default().reveal(`.about__data, .discount__img`, { origin: 'left' });
      ScrollReveal.default().reveal(`.about__img, .discount__data`, { origin: 'right' });
    });

    // Scroll event handlers
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }

      const scrollUpEl = document.getElementById('scroll-up');
      if (window.scrollY >= 460) {
        scrollUpEl.classList.add('show-scroll');
      } else {
        scrollUpEl.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Toggle menu event handlers
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');

    const showMenu = () => navMenu.classList.add('show-menu');
    const hideMenu = () => navMenu.classList.remove('show-menu');

    if (navToggle) navToggle.addEventListener('click', showMenu);
    if (navClose) navClose.addEventListener('click', hideMenu);

    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav__link');
    const linkAction = () => {
      navMenu.classList.remove('show-menu');
    };
    navLinks.forEach(link => link.addEventListener('click', linkAction));

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navToggle) navToggle.removeEventListener('click', showMenu);
      if (navClose) navClose.removeEventListener('click', hideMenu);
      navLinks.forEach(link => link.removeEventListener('click', linkAction));
    };
  }, []);

  return (
    <AuthProvider>
    <Router>
        <div className="app-wrapper">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/habbit" element={<Habbit />} />
              <Route path="/article" element={<Article />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/analyze" 
                element={
                  <ProtectedRoute>
                    <Analyze />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/history" 
                element={
                  <ProtectedRoute>
                    <History />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
                    </div>

      {/* Scroll Up Button */}
        <Link to="#" className="scrollup" id="scroll-up">
        <i className='bx bx-up-arrow-alt scrollup__icon'></i>
        </Link>
    </Router>
    </AuthProvider>
  );
}

export default App;