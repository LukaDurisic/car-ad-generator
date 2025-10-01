import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      <p>Contact: support@yourcompany.com</p>
    </footer>
  );
}
