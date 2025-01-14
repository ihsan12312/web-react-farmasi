import { useState } from "react";
import Footer from "../Footer";
import Header from "../header"; // Fixed case sensitivity
import Nav from "../Nav";
import Section from "../Section";

function PembelianObat() {
  const [namaObat, setNamaObat] = useState("");
  const [jenisObat, setJenisObat] = useState("");
  const [hargaObat, setHargaObat] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleAddObat = async (e) => {
    e.preventDefault();
    if (!namaObat || !jenisObat || !hargaObat) {
      setError("Harap lengkapi semua kolom!");
      setSuccess(null);
      return;
    }

    try {
      const response = await fetch("http://localhost/php-file/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          namaObat,
          jenisObat,
          hargaObat,
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan data obat.");
      }

      const result = await response.json();
      console.log("Data berhasil ditambahkan:", result);

      setError(null);
      setSuccess("Data obat berhasil ditambahkan!");
      setNamaObat("");
      setJenisObat("");
      setHargaObat("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Terjadi kesalahan saat menambahkan data.");
      setSuccess(null);
    }
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </div>

      <Section />

      <Footer />
    </>
  );
}

export default PembelianObat;
