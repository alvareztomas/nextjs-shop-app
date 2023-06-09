import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Content = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose your favorite</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/content/illustrations">
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link className={styles.item} href="/content/websites">
          <span className={styles.title}>Websites</span>
        </Link>
        <Link className={styles.item} href="/content/applications">
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Content;
