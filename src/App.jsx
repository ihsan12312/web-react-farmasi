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



        <section id="daftar-apotek">
            <div className="container">
                <h2>Daftar Apotek</h2>
                <div className="card">
                    <h3>Apotek Sehat Sentosa</h3>
                    <p><strong>Alamat:</strong> Jl. Merdeka No.10, Jakarta</p>
                    <p><strong>Jam Operasional:</strong> 08:00 - 22:00 (Setiap Hari)</p>
                    <p><strong>Telepon:</strong> (021) 1234-5678</p>
                    <p><strong>Layanan:</strong> Penjualan obat resep dan non-resep, alat kesehatan, konsultasi farmasi gratis</p>
                </div>
                <div className="card">
                    <h3>Apotek K24</h3>
                    <p><strong>Alamat:</strong> Jl. Sudirman No.45, Surabaya</p>
                    <p><strong>Jam Operasional:</strong> 24 Jam</p>
                    <p><strong>Telepon:</strong> (031) 9876-5432</p>
                    <p><strong>Layanan:</strong> Penjualan obat 24 jam, pengantaran obat, program membership</p>
                </div>
                <div className="card">
                    <h3>Apotek Kimia Farma</h3>
                    <p><strong>Alamat:</strong> Jl. Gatot Subroto No.22, Bandung</p>
                    <p><strong>Jam Operasional:</strong> 07:00 - 23:00 (Setiap Hari)</p>
                    <p><strong>Telepon:</strong> (022) 8765-4321</p>
                    <p><strong>Layanan:</strong> Penjualan obat, tes kesehatan, konsultasi gizi</p>
                </div>
            </div>
        </section>
    

      <footer>
        
        <p>&copy; 2024 Tempat Penjualan Obat. Hak cipta dilindungi undang-undang.</p>
      </footer>
    </>
  );
}

export default App;
