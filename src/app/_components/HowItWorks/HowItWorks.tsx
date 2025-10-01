import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How It Works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <span className={styles.number}>1</span>
          <p>Enter your VIN number or search by model.</p>
        </div>
        <div className={styles.step}>
          <span className={styles.number}>2</span>
          <p>Our AI instantly decodes car details & history.</p>
        </div>
        <div className={styles.step}>
          <span className={styles.number}>3</span>
          <p>Generate car ads in seconds — ready to publish.</p>
        </div>
      </div>
    </section>
  );
}
