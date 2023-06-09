import React from "react";
import styles from "./page.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Clips, VODs & More</h1>
      {children}
    </div>
  );
};

export default Layout;
