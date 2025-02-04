"use client";

import { FaLinkedin, FaGithub, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import styles from "../styles/aside.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className={styles.icon} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className={styles.icon} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaRegEnvelope className={styles.icon} />
      </a>
    </aside>
  );
}
