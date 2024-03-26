"use client";
import React from "react";
import styles from "./footer.module.css";
import { Img } from "react-image";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.main}`}>
      <section className={styles.section}>
        <div className={styles.section_text}>
          <p>offcom</p>
        </div>
        <div className={styles.section_social_btn}>
          <a href="tel:1234567890">
            <Img alt="Phone Icon Footer" src={`/images/landing/Phone.svg`} />
          </a>
          <a href="example@example.com">
            <Img alt="Email Icon Footer" src={"/images/landing/Email.svg"} />
          </a>
          <a href="https://linkedin.com">
            <Img
              alt="LinkedIn Icon Footer"
              src={`/images/landing/LinkedIn.svg`}
            />
          </a>
          <a href="https://instagram.com">
            <Img
              alt="Instagram Icon Footer"
              src={`/images/landing/Insta.svg`}
            />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
