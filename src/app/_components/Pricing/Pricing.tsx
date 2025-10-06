"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const prices = yearly ? [99, 199, 299] : [10, 20, 30];

  // Controls animation start
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // only once
    threshold: 0.3, // 20% visible triggers animation
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Variants for container & cards
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} className={styles.section}>
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

      <motion.div
        className={styles.cards}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {prices.map((price, i) => (
          <motion.div key={i} className={styles.card} variants={cardVariants}>
            <h3>Plan {i + 1}</h3>
            <p className={styles.price}>${price}</p>
            <ul className={styles.list}>
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <button className={styles.button}>Select</button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
