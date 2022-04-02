import React from "react";
import Button from "../Button/Button";
import styles from "./Person.module.scss";

const Person = (props) => {
  return (
    <div className={styles.game}>
      <div className={styles.image}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundImage: props.image
              ? 'url(" ' + props.image + ' ")'
              : 'url("https://i2-prod.football.london/incoming/article17909924.ece/ALTERNATES/s1200b/0_GettyImages-1210995196.jpg")',
          }}
        ></div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className={styles.text}>{props.title}</div>
        {props.job ? <div className={styles.job}>{props.job}</div> : null}
      </div>
      <Button>السبرة الذاتية</Button>
    </div>
  );
};

export default Person;
