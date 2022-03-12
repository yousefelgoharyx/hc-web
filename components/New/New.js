import React from "react";
import Button from "../Button/Button";
import styles from "./New.module.scss";
const New = () => {
  return (
    <div className={styles.new}>
      <div className={styles.newImage}>
        <img src="https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80" />
      </div>
      <div className={styles.newBody}>
        <div className={styles.newDate}>يناير 6</div>
        <p className={styles.newTitle}>عنوان خبر</p>
        <Button>المزيد</Button>
      </div>
    </div>
  );
};

export default New;
