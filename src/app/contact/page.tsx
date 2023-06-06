import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Feel free to contact me!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact1.png"
            alt="Illidan stormrage"
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Message"
            cols={30}
            rows={10}></textarea>
          <Button url="" text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
