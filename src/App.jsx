import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

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
        // reset: true,
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
    <Router>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src="assets/img/logo.png" alt="" className="nav__logo-img" />
            JeraWHAT?!
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">About</a>
              </li>
              <li className="nav__item">
                <a href="#habbit" className="nav__link">Habbit</a>
              </li>
              <li className="nav__item">
                <a href="#new" className="nav__link">Article</a>
              </li>
              <Link to="/login" className="button button--ghost">
                Login
              </Link>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>
            <img src="assets/img/nav-img.png" alt="" className="nav__img" />
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <main className="main">
            {/* HOME */}
            <section className="home container" id="home">
              <div className="swiper home-swiper">
                <div className="swiper-wrapper">
                  {/* SLIDE 1 */}
                  <section className="swiper-slide">
                    <div className="home__content grid">
                      <div className="home__group">
                        <img src="assets/img/home1-img.png" alt="" className="home__img" />
                        <div className="home__indicator"></div>
                        <div className="home__details-img">
                          <h4 className="home__details-title">Jerawat Mengganggu?</h4>
                          <span className="home__details-subtitle">Kami Punya Solusinya!</span>
                        </div>
                      </div>
                      <div className="home__data">
                        <h3 className="home__subtitle">Masalah Jerawat? Kami Pahami!</h3>
                        <h1 className="home__title">Wajah Kena Jerawat? <br /> Jangan Khawatir, Kami Bantu!</h1>
                        <p className="home__description">Apakah kamu merasa sedih karena jerawat yang muncul? Kami punya solusi untuk merawat dan mengatasi masalah kulitmu.</p>
                        <div className="home__buttons">
                          <a href="#" className="button">Cek Sekarang</a>
                          <a href="#" className="button--link button--flex">
                            Pelajari Lebih Lanjut <i className='bx bx-right-arrow-alt button__icon'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* SLIDE 2 */}
                  <section className="swiper-slide">
                    <div className="home__content grid">
                      <div className="home__group">
                        <img src="assets/img/home2-img.png" alt="" className="home__img" />
                        <div className="home__indicator"></div>
                        <div className="home__details-img">
                          <h4 className="home__details-title">Scan Wajah Dengan Mudah</h4>
                          <span className="home__details-subtitle">Deteksi Jerawat Instan!</span>
                        </div>
                      </div>
                      <div className="home__data">
                        <h3 className="home__subtitle">Teknologi Canggih untuk Kulit Sehat</h3>
                        <h1 className="home__title">Scan Wajah <br /> Deteksi Jerawat <br /> Dengan Mudah!</h1>
                        <p className="home__description">Hanya dengan handphone untuk memindai wajah dan mengetahui kondisi kulit serta jerawat yang ada. Teknologi canggih untuk perawatan kulit yang lebih baik.</p>
                        <div className="home__buttons">
                          <a href="#" className="button">Cek Sekarang</a>
                          <a href="#" className="button--link button--flex">
                            Pelajari Lebih Lanjut <i className='bx bx-right-arrow-alt button__icon'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* SLIDE 3 */}
                  <section className="swiper-slide">
                    <div className="home__content grid">
                      <div className="home__group">
                        <img src="assets/img/home3-img.png" alt="" className="home__img" />
                        <div className="home__indicator"></div>
                        <div className="home__details-img">
                          <h4 className="home__details-title">Solusi Makanan Sehat</h4>
                          <span className="home__details-subtitle">Kurangi Jerawat Secara Alami</span>
                        </div>
                      </div>
                      <div className="home__data">
                        <h3 className="home__subtitle">Makanan Sehat Untuk Kulit Bersih</h3>
                        <h1 className="home__title">Makanan Sehat <br /> Untuk Kulit Bebas Jerawat!</h1>
                        <p className="home__description">Kami memberikan rekomendasi makanan sehat yang dapat membantu mengurangi jerawat dan menjaga kulit tetap bersih dan cerah.</p>
                        <div className="home__buttons">
                          <a href="#" className="button">Lihat Rekomendasi</a>
                          <a href="#" className="button--link button--flex">
                            Pelajari Lebih Lanjut <i className='bx bx-right-arrow-alt button__icon'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </section>

            {/*==================== CATEGORY ====================*/}
            <section className="section category">
              <h2 className="section__title">Kategori Jerawat</h2>
              <div className="category__container container grid">

                <div className="category__data">
                  <img src="/assets/img/category1-img.png" alt="" className="category__img" />
                  <h3 className="category__title">Whitehead</h3>
                  <p className="category__description">Benjolan kecil berwarna putih yang terbentuk ketika pori tersumbat oleh minyak dan sel kulit mati.</p>
                </div>

                <div className="category__data">
                  <img src="/assets/img/category2-img.png" alt="" className="category__img" />
                  <h3 className="category__title">Blackhead</h3>
                  <p className="category__description">Pori terbuka yang berwarna gelap karena oksidasi minyak yang terperangkap di dalamnya.</p>
                </div>

                <div className="category__data">
                  <img src="/assets/img/category3-img.png" alt="" className="category__img" />
                  <h3 className="category__title">Papule</h3>
                  <p className="category__description">Benjolan kecil merah yang terangkat yang muncul ketika dinding pori teriritasi.</p>
                </div>

                <div className="category__data">
                  <img src="/assets/img/category4-img.png" alt="" className="category__img" />
                  <h3 className="category__title">Pustule</h3>
                  <p className="category__description">Jerawat yang meradang dan berisi nanah yang seringkali terbentuk dari papule.</p>
                </div>

                <div className="category__data">
                  <img src="/assets/img/category5-img.png" alt="" className="category__img" />
                  <h3 className="category__title">Cystic</h3>
                  <p className="category__description">Benjolan besar dan menyakitkan di bawah kulit yang disebabkan oleh peradangan yang parah.</p>
                </div>

                <div className="category__data">
                  <img src="/assets/img/category6-img.png" alt="" className="category__img" />
                  <h3 className="category__title">Nodule</h3>
                  <p className="category__description">Benjolan keras dan besar yang terbentuk dalam kulit dan seringkali menyakitkan.</p>
                </div>

                <div className="category__data">
                  <img src="/assets/img/category7-img.png" alt="" className="category__img" />
                  <h3 className="category__title">Hormonal</h3>
                  <p className="category__description">Jerawat yang dipicu oleh perubahan hormon, biasanya terjadi selama masa pubertas atau siklus menstruasi.</p>
                </div>
                
              </div>
            </section>

            {/* ABOUT */}
            <section className="section about" id="about">
              <div className="about__container container grid">
                <div className="about__data">
                  <h2 className="section__title about__title">Tentang Website JeraWHAT?!</h2>
                  <p className="about__description">
                    Website ini dirancang untuk membantu kamu memeriksa kondisi kulit wajah dengan teknologi scan wajah. 
                    Dengan menggunakan ponsel pintar, kamu dapat dengan mudah menganalisis kondisi kulit kamu, termasuk jerawat dan masalah kulit lainnya. 
                    Dapatkan rekomendasi perawatan yang tepat untuk menjaga kulit tetap sehat dan cerah.
                  </p>
                  <a href="#" className="button">Pelajari Fitur Scan</a>
                </div>
                <img src="assets/img/about-img.png" alt="" className="about__img" />
              </div>
            </section>

            {/*==================== HABBIT ====================*/}
            <section className="section habbit" id="habbit">
              <h2 className="section__title">Kebiasaan yang Berpengaruh pada Kondisi Kulit Wajah</h2>
              <div className="habbit__container container grid">

                <div className="habbit__content">
                  <img src="/assets/img/kebiasaan1.png" alt="" className="habbit__img" />
                  <h3 className="habbit__title">Menggunakan Makeup Secara Teratur</h3>
                  <span className="habbit__subtitle">Kebiasaan yang dapat menyumbat pori</span>
                </div>

                <div className="habbit__content">
                  <img src="/assets/img/kebiasaan2.png" alt="" className="habbit__img" />
                  <h3 className="habbit__title">Kurang Tidur</h3>
                  <span className="habbit__subtitle">Kurang tidur memperburuk kondisi kulit</span>
                </div>

                <div className="habbit__content">
                  <img src="/assets/img/kebiasaan3.png" alt="" className="habbit__img" />
                  <h3 className="habbit__title">Diet Tidak Seimbang</h3>
                  <span className="habbit__subtitle">Makanan tidak sehat berisiko pada kulit berjerawat</span>
                </div>

                <div className="habbit__content">
                  <img src="/assets/img/kebiasaan4.png" alt="" className="habbit__img" />
                  <h3 className="habbit__title">Kurang Perawatan Kulit</h3>
                  <span className="habbit__subtitle">Perawatan yang buruk memperburuk kulit berjerawat</span>
                </div>

                <div className="habbit__content">
                  <img src="/assets/img/kebiasaan5.png" alt="" className="habbit__img" />
                  <h3 className="habbit__title">Paparan Matahari Berlebihan</h3>
                  <span className="habbit__subtitle">Paparan sinar UV merusak kulit</span>
                </div>

                <div className="habbit__content">
                  <img src="/assets/img/kebiasaan6.png" alt="" className="habbit__img" />
                  <h3 className="habbit__title">Stres Tinggi</h3>
                  <span className="habbit__subtitle">Stres dapat menyebabkan flare-up jerawat</span>
                </div>

              </div>
            </section>

            {/* SCAN */}
            <section className="section scan">
              <div className="scan__container container grid">
                <div className="scan">
                  <h2 className="scan__title">Mari Cek Kondisi Kulit Wajahmu <br /> Dengan Analisis Scan</h2>
                  <a href="#" className="button">Mulai Scan Sekarang</a>
                </div>
                <img src="assets/img/scan-img.png" alt="" className="scan__img" />
              </div>
            </section>

            {/*==================== ULASAN PENGGUNA ====================*/}
            <section className="section new" id="new">
              <h2 className="section__title">Ulasan Pengguna</h2>

              <div className="new__container container">
                <div className="swiper new-swiper">
                  <div className="swiper-wrapper">
                    {/* Slide 1 */}
                    <div className="new__content swiper-slide">
                      <div className="new__tag">New</div>
                      <img src="/assets/img/about-img.png" alt="" className="new__img" />
                      <h3 className="new__title">Clara Hardy</h3>
                      <span className="new__subtitle">Student</span>
                      
                      <div className="new__rates">
                        <span className="new__rate">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>
                    
                    {/* Slide 2 */}
                    <div className="new__content swiper-slide">
                      <div className="new__tag">New</div>
                      <img src="/assets/img/about-img.png" alt="" className="new__img" />
                      <h3 className="new__title">William Stan</h3>
                      <span className="new__subtitle">Student</span>
                      
                      <div className="new__rates">
                        <span className="new__rate">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="new__content swiper-slide">
                      <div className="new__tag">New</div>
                      <img src="/assets/img/about-img.png" alt="" className="new__img" />
                      <h3 className="new__title">Nick Andrew</h3>
                      <span className="new__subtitle">Student</span>
                      
                      <div className="new__rates">
                        <span className="new__rate">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="new__content swiper-slide">
                      <div className="new__tag">New</div>
                      <img src="/assets/img/about-img.png" alt="" className="new__img" />
                      <h3 className="new__title">Angela Merici</h3>
                      <span className="new__subtitle">Student</span>
                      
                      <div className="new__rates">
                        <span className="new__rate">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>

                    {/* Slide 5 */}
                    <div className="new__content swiper-slide">
                      <div className="new__tag">New</div>
                      <img src="/assets/img/about-img.png" alt="" className="new__img" />
                      <h3 className="new__title">Natasha Ruth</h3>
                      <span className="new__subtitle">Student</span>

                      <div className="new__rates">
                        <span className="new__rate">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>

                    {/* Slide 6 */}
                    <div className="new__content swiper-slide">
                      <div className="new__tag">New</div>
                      <img src="/assets/img/about-img.png" alt="" className="new__img" />
                      <h3 className="new__title">Valentine Rita</h3>
                      <span className="new__subtitle">Student</span>
                      
                      <div className="new__rates">
                        <span className="new__rate">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BERLANGGANAN */}
            <section className="section newsletter">
              <div className="newsletter__container container">
                <h2 className="section__title">Mari Berlangganan</h2>
                <p className="newsletter__description">
                  Promotion new products and sales. Directly to your inbox
                </p>
                <form className="newsletter__form">
                  <input type="text" placeholder="Enter your email" className="newsletter__input" />
                  <button className="button">Subscribe</button>
                </form>
              </div>
            </section>
          </main>
        } />
      </Routes>

      {/* FOOTER */}
      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <img src="assets/img/logo.png" alt="" className="footer__logo-img" />
              JeraWHAT?!
            </a>
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
                    <div class="footer__content">
                        <h3 class="footer__title">About</h3>
                        
                        <ul class="footer__links">
                            <li>
                                <a href="#" class="footer__link">About Us</a>
                            </li>
                            <li>
                                <a href="#" class="footer__link">Features</a>
                            </li>
                            <li>
                                <a href="#" class="footer__link">News</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Our Services</h3>
                        
                        <ul class="footer__links">
                            <li>
                                <a href="#" class="footer__link">Scanner</a>
                            </li>
                            <li>
                                <a href="#" class="footer__link">Rate</a>
                            </li>
                            <li>
                                <a href="#" class="footer__link">Subscribe</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Our Company</h3>
                        
                        <ul class="footer__links">
                            <li>
                                <a href="#" class="footer__link">Blog</a>
                            </li>
                            <li>
                                <a href="#" class="footer__link">About us</a>
                            </li>
                            <li>
                                <a href="#" class="footer__link">Our mision</a>
                            </li>
                        </ul>
                    </div>
                </div>
        <span className="footer__copy">© JeraWHAT?! All rights reserved</span>
        <img src="assets/img/footer1-img.png" alt="" className="footer__img-one" />
        <img src="assets/img/footer2-img.png" alt="" className="footer__img-two" />
      </footer>

      {/* Scroll Up Button */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className='bx bx-up-arrow-alt scrollup__icon'></i>
      </a>
    </Router>
  );
}

export default App;