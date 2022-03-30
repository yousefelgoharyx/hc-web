import React from "react";
import styles from "./Game.module.scss";
import Link from "next/link";
const Resturant = (props) => (
  <Link href={props.href || "/"}>
    <div className={styles.game}>
      <div className={styles.image}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundImage:
              'url("https://i2-prod.football.london/incoming/article17909924.ece/ALTERNATES/s1200b/0_GettyImages-1210995196.jpg")',
          }}
        ></div>
      </div>
      <div className={styles.text}>{props.title}</div>
    </div>
  </Link>
);

export default Resturant;
