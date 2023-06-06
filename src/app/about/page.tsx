import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";

const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="/about1.jpg"
          alt="Gaming photo"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Content Creator</h1>
          <h2>Happy to make people laugh</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>About Me</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            adipisci beatae porro, dignissimos voluptatibus hic eos iste officia
            ipsum praesentium?
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aperiam
            mollitia illo accusamus beatae sed dolorum laudantium consequuntur
            quisquam fugit.
          </p>
        </div>
        <div className={styles.item}>
          <h1>About My Content</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            adipisci beatae porro, dignissimos voluptatibus hic eos iste officia
            ipsum praesentium?
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aperiam
            mollitia illo accusamus beatae sed dolorum laudantium consequuntur
            quisquam fugit.
          </p>
          <Button text="Contact Me" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
