import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/button";
import Image from "next/image";

const Category = ({ params }: any) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test Title</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tempore nobis similique ad autem rem eveniet nihil ducimus, at
            cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti tempore nobis similique ad autem rem eveniet nihil ducimus,
            at cumque.
          </p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="image"
            className={styles.img}
            fill={true}
            src={`/${params.category}.jpg`}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test Title</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tempore nobis similique ad autem rem eveniet nihil ducimus, at
            cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti tempore nobis similique ad autem rem eveniet nihil ducimus,
            at cumque.
          </p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="image"
            className={styles.img}
            fill={true}
            src={`/${params.category}.jpg`}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test Title</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tempore nobis similique ad autem rem eveniet nihil ducimus, at
            cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti tempore nobis similique ad autem rem eveniet nihil ducimus,
            at cumque.
          </p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="image"
            className={styles.img}
            fill={true}
            src={`/${params.category}.jpg`}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
