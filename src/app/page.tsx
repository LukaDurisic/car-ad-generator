"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [vin, setVin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Looking up data for VIN: ${vin}`);
  };

  return (
    <main className={styles.hero}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Decode Your Vehicle Instantly</h1>
        <p className={styles.subtitle}>
          Get detailed vehicle history, market value, specifications, and more
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.icon} />
            <input
              type="text"
              placeholder="Enter VIN, model, or brand..."
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Search
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
