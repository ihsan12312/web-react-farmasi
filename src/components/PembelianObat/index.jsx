import { useState } from "react";
import Footer from "../Footer";
import Header from "../header"; // Fixed case sensitivity
import Nav from "../Nav";
import Section from "../Section";

function PembelianObat() {
  const [namaObat, setNamaObat] = useState("");
  const [jenisObat, setJenisObat] = useState("");
  const [hargaObat, setHargaObat] = useState("");

  const handleAddObat = (e) => {
    e.preventDefault();
    if (!namaObat || !jenisObat || !hargaObat) {
      console.log("Harap lengkapi semua kolom!");
      return;
    }
    console.log("Nama Obat:", namaObat, "Jenis Obat:", jenisObat, "Harga Obat:", hargaObat);
    // You can handle further logic like saving the data here.
  };

  return (
    <>
      <Header />
      <Nav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f4f4f9",
        }}
      >
        <h1>Tambah Obat</h1>
        <form
          onSubmit={handleAddObat}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
          }}
        >
          {/* Obat */}
          <input
            type="text"
            value={namaObat}
            onChange={(e) => setNamaObat(e.target.value)}
            placeholder="Nama Obat"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            value={jenisObat}
            onChange={(e) => setJenisObat(e.target.value)}
            placeholder="Jenis Obat"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="number"
            value={hargaObat}
            onChange={(e) => setHargaObat(e.target.value)}
            placeholder="Harga Obat"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
            }}
          >
            Tambah Obat
          </button>
        </form>
      </div>

      <Section />

      <Footer />
    </>
  );
}

export default PembelianObat;