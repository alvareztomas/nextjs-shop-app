import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Be a part of the stream</h1>
        <p className={styles.description}>
          Join the community now and participate in the upcoming streams and
          events. Start by joining our discord server with the button bellow!
        </p>
        <button className={styles.btn}>Get started!</button>
      </div>
      <div className={styles.item}>
        <Image
          className={styles.img}
          width={450}
          height={450}
          src="/home1.jpg"
          alt="Gaming image"
        />
      </div>
    </div>
  );
}
