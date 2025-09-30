"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./page.module.css";
import Image from "next/image";
import StreetIcon from "@/app/_assets/streets.png";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.daka}>
        <Image
          alt="daka"
          src={StreetIcon}
          height={30}
          width={30}
          style={{ backgroundColor: "white" }}
        />{" "}
        Đaka d.d.
      </div>
      <div className={styles.leftContainer}>
        New way of creating
        <span className={styles.highlight}> car ads!</span>
        <p className={styles.subtitle}>
          Explore over <span className={styles.highlight}>5M+ cars</span> and
          research from <span className={styles.highlight}>4M+ car ads</span>
        </p>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Generate car ad in <span className={styles.highlight}>seconds</span>
        </h1>

        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            maxLength={17}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your VIN number..."
            className={styles.searchInput}
          />
          <div className={styles.loadingWrapper}>
            {query.split("").map((char, idx) => (
              <span key={idx} className={styles.loadingDot} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
