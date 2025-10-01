"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import StreetIcon from "@/app/_assets/streets.png";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const fullText =
    "All you need to do is input your VIN number and your ad will be done shortly with assistance of AI!";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const duration = 5000; // 5 seconds
    const stepTime = duration / fullText.length;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

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

        <div className={styles.stepDescription}>
          {/* All you need to do is input your{" "}
          <span className={styles.highlight}>VIN number</span> and your ad will{" "}
          <br />
          be done shortly with assistance of AI! */}
          {typedText}
        </div>

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
        <div className={styles.btnContainer}>
          <div className={styles.generateBtn}>Generate ad</div>
        </div>
      </div>
    </section>
  );
}
