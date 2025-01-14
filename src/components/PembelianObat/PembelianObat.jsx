import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import './style.css';
import logoPharmacy from '../../assets/pharmacy-logo.png';

const PembelianObat = () => {
    const [obat, setObat] = useState({
        namaObat: '',
        jenisObat: '',
        hargaObat: ''
    });
    const [dataObat, setDataObat] = useState([]);
    const [error, setError] = useState(null);

    const navigate = useNavigate('/Obatlist');

    const fetchObat = async () => {
        try {
            const res = await fetch('http://localhost/backend/index.php');
            if (!res.ok) {
                throw new Error('Gagal mengambil data obat');
            }
            const data = await res.json();
            setDataObat(data);
        } catch (err) {
            setError(err.message || 'Terjadi kesalahan saat mengambil data.');
        }
    };

    useEffect(() => {
        fetchObat();
    }, []);

    const handleAddObat = async (e) => {
        e.preventDefault();
        if (!obat.namaObat || !obat.jenisObat || !obat.hargaObat) {
            setError('Semua kolom wajib diisi');
            return;
        }
        setError(null);

        try {
            const res = await fetch('http://localhost/backend/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obat)
            });
            if (!res.ok) {
                throw new Error('Gagal menambahkan obat');
            }
            await res.json();
            setObat({ namaObat: '', jenisObat: '', hargaObat: '' });
            fetchObat();
        } catch (err) {
            setError(err.message || 'Terjadi kesalahan.');
        }
    };

    return (
        <div>
            <Logo src={logoPharmacy} alt="Pharmacy Logo" />
            <div>
                <h1 className="title">Tambah Obat</h1>
                <form onSubmit={handleAddObat}>
                    <Input
                        label="Nama Obat"
                        name="namaObat"
                        type="text"
                        placeholder="Masukkan Nama Obat"
                        value={obat.namaObat}
                        onChange={(e) => setObat({ ...obat, namaObat: e.target.value })}
                    />
                    <Input
                        label="Jenis Obat"
                        name="jenisObat"
                        type="text"
                        placeholder="Masukkan Jenis Obat"
                        value={obat.jenisObat}
                        onChange={(e) => setObat({ ...obat, jenisObat: e.target.value })}
                    />
                    <Input
                        label="Harga Obat"
                        name="hargaObat"
                        type="number"
                        placeholder="Masukkan Harga Obat"
                        value={obat.hargaObat}
                        onChange={(e) => setObat({ ...obat, hargaObat: e.target.value })}
                    />
                    <Button type="submit" className="submit-button">
                        Tambah Obat
                    </Button>
                    {error && <p className="error">{error}</p>}
                </form>
                <h2>Daftar Obat</h2>
                <ul>
                    {dataObat.map((item, index) => (
                        <li key={index}>
                            {item.namaObat} - {item.jenisObat} - Rp{item.hargaObat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PembelianObat;
