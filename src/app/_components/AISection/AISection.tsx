import styles from "./AISection.module.css";

export default function AISection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>AI Trained on 4M+ Car Ads</h2>
      <p className={styles.text}>
        Our AI engine is trained on over <span>4 million car ads</span>, giving
        it unmatched knowledge of how to create optimized, high-performing
        listings.
      </p>
    </section>
  );
}
