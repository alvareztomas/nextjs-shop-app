"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Content",
    url: "/content",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const navbarHeight = navbarRef.current?.offsetHeight || 0;

      if (offset > navbarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className={`${styles.container} ${isSticky ? styles.sticky : ""}`}>
        <Link href="/" className={styles.logo}>
          Annoyed
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          <button
            className={styles.logout}
            onClick={() => {
              console.log("logged out");
            }}>
            Logout
          </button>
        </div>
      </div>
      {isSticky && (
        <div style={{ height: navbarRef.current?.offsetHeight || 0 }} />
      )}
    </>
  );
};

export default Navbar;
