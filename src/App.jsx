import Footer from "./components/Footer"
import Section from "./components/Section";
import Header from "./components/header"
import Nav from "./components/Nav"
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Nav />


      <main>
        <section id="home">
          <div className="container">
            <h2>Selamat Datang di Tempat Penjualan Obat</h2>
            <p>
              Kami menyediakan informasi terpercaya tentang apotek dan tempat penjualan obat
              di sekitar Anda. Temukan apotek terdekat dan dapatkan informasi lengkap tentang
              layanan yang mereka tawarkan.
            </p>

          </div>
        </section>
        </main>

        <section id="featured-photos">
          <div className="container">
            <h2>Galeri Apotek</h2>

            <div className="photo-section">
              <iframe
                src="https://www.youtube.com/watch?v=qoqHBPmXifM"
                height="400"
                width="600"
                title="My Annoying Brother ala Indonesia"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3>Komentar</h3>
              <p>Tampak depan apotek modern dengan desain yang menarik dan ramah pelanggan.</p>
            </div>

            <div className="photo-section">
              <iframe
                src="https://www.youtube.com/embed/hzxe2cvsAS4"
                height="400"
                width="600"
                title="Apotek dengan Rak Tertata Rapi"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3>Komentar</h3>
              <p>Rak obat yang tertata rapi, memudahkan pelanggan dalam mencari produk yang dibutuhkan.</p>
            </div>

            <div className="photo-section">
              <iframe
                src="https://www.youtube.com/watch?v=Df9nJxy5g2I"
                height="400"
                width="600"
                title="Konsultasi Bersama Apoteker Profesional"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3>Komentar</h3>
              <p>Apoteker profesional kami siap memberikan konsultasi dan pelayanan terbaik.</p>
            </div>
          </div>
        </section>


      <Section />
    
      <Footer />

    </>
  );
}

export default App;