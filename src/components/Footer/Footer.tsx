import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Annoyed. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/fb_logo.png"
          alt="Facebook account"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/ig_logo.png"
          alt="Instagram account"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/tw_logo.png"
          alt="Twitter account"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/yt_logo.png"
          alt="Youtube account"
          width={20}
          height={20}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
