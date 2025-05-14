import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
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
                    <Link to="/analyze" className="button">Cek Sekarang</Link>
                    <Link to="/learn-more" className="button--link button--flex">
                      Pelajari Lebih Lanjut <i className='bx bx-right-arrow-alt button__icon'></i>
                    </Link>
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
                    <Link to="/analyze" className="button">Cek Sekarang</Link>
                    <Link to="/learn-more" className="button--link button--flex">
                      Pelajari Lebih Lanjut <i className='bx bx-right-arrow-alt button__icon'></i>
                    </Link>
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
                    <Link to="/recommendations" className="button">Lihat Rekomendasi</Link>
                    <Link to="/learn-more" className="button--link button--flex">
                      Pelajari Lebih Lanjut <i className='bx bx-right-arrow-alt button__icon'></i>
                    </Link>
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
        <h2 className="section__title sr-fade">Kategori Jerawat</h2>
        <div className="category__container container grid sr-fade">
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
        </div>
      </section>

      {/* SCAN */}
      <section className="section scan sr-fade">
        <div className="scan__container container grid">
          <div className="scan">
            <h2 className="scan__title">Mari Cek Kondisi Kulit Wajahmu <br /> Dengan Analisis Scan</h2>
            <Link to="/analyze" className="button">Mulai Analyze Sekarang</Link>
          </div>
          <img src="assets/img/scan-img.png" alt="" className="scan__img" />
        </div>
      </section>

      {/*==================== ULASAN PENGGUNA ====================*/}
      <section className="section new sr-fade" id="new">
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
      <section className="section newsletter sr-fade">
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
  );
};

export default Home; 