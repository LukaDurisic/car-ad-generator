"use client";
import { useState } from "react";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const prices = yearly ? [99, 199, 299] : [10, 20, 30];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Choose Your Plan</h2>

      <div className={styles.toggle}>
        <span className={!yearly ? styles.active : styles.inactive}>
          Monthly
        </span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={yearly}
            onChange={() => setYearly(!yearly)}
          />
          <span className={styles.slider}></span>
        </label>
        <span className={yearly ? styles.active : styles.inactive}>Yearly</span>
      </div>

      <div className={styles.cards}>
        {prices.map((price, i) => (
          <div key={i} className={styles.card}>
            <h3>Plan {i + 1}</h3>
            <p className={styles.price}>${price}</p>
            <ul className={styles.list}>
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <button className={styles.button}>Select</button>
          </div>
        ))}
      </div>
    </section>
  );
}
