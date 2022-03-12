import React from "react";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}>
        <p>مرحبا بك في نادي اصحاب الجياد</p>
        <p>تعرف علي تاريخ النادي والخدمات الخاصة به</p>
      </div>
    </div>
  );
};

export default Hero;
