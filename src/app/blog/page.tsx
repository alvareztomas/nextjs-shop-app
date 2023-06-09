import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/testId" className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src="/about1.jpg"
            alt=""
            width={400}
            height={200}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test Title</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            itaque placeat aliquid accusantium obcaecati voluptatum suscipit
            voluptate ratione eligendi nesciunt omnis alias quam odit saepe
            fugit aspernatur quisquam, minus nihil?
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src="/about1.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test Title</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            itaque placeat aliquid accusantium obcaecati voluptatum suscipit
            voluptate ratione eligendi nesciunt omnis alias quam odit saepe
            fugit aspernatur quisquam, minus nihil?
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src="/about1.jpg"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test Title</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            itaque placeat aliquid accusantium obcaecati voluptatum suscipit
            voluptate ratione eligendi nesciunt omnis alias quam odit saepe
            fugit aspernatur quisquam, minus nihil?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
