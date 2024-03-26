import React from "react";
import styles from "./content.module.css";

const Content: React.FC = () => {
  return (
    <section className={`${styles.main} space-y-8 pt-12`}>
      <div className={styles.section_entutaistic}>
        <p>Welcome to the enthusiast community</p>
      </div>
      <div className={styles.section_build}>
        <p>Come showcase your Build!</p>
      </div>
      <div className={styles.section_logo}>
        <img
          src="/images/landing/logo.svg"
          className={styles.section_logoimg}
        />
      </div>
    </section>
  );
};

export default Content;
