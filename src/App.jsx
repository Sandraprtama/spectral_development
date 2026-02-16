import React, { useState } from "react";
// Gunakan import standar, jika sudah npm install ini akan jalan
import { motion } from "framer-motion";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const daftarProject = [
    {
      id: 1,
      judul: "Aplikasi 3D Interior Dapur",
      deskripsi: "Desain interior modern",
    },
    {
      id: 2,
      judul: "Sertifikasi Video Editor",
      deskripsi: "Sertifikasi profesi",
    },
    { id: 3, judul: "Portofolio Pro", deskripsi: "Web React pertama saya" },
  ];

  return (
    <div className={darkMode ? "app-container dark" : "app-container"}>
      <nav className="navbar">
        <h1 className="logo">Sandra Dev</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Terang" : "🌙 Gelap"}
        </button>
      </nav>

      <header className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Halo, Saya Sandra
        </motion.h1>
        <p>Frontend Developer yang suka bereksperimen dengan React.</p>
      </header>

      <div className="project-grid">
        {daftarProject.map((item, index) => (
          <motion.div
            key={item.id}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{item.judul}</h3>
            <p>{item.deskripsi}</p>
            <button className="btn-view">Lihat Detail</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
