import React from "react";
import Button from "../Button/Button";
import styles from "./Person.module.scss";

const Person = (props) => (
  <div className={styles.game}>
    <img
      className={styles.image}
      src="https://i2-prod.football.london/incoming/article17909924.ece/ALTERNATES/s1200b/0_GettyImages-1210995196.jpg"
    />
    <div className={styles.text}>{props.title}</div>
    <Button>السبرة الذاتية</Button>
  </div>
);

export default Person;
