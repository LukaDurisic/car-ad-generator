import styles from "./WhatWeHave.module.css";

export default function WhatWeHave() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>A Database That Grows Daily</h2>
      <p className={styles.text}>
        We already have <span>5M+ cars</span> in our database — and we’re adding
        new ones every single day.
      </p>
    </section>
  );
}
