import React from "react";
import styles from "./Game.module.scss";
import Link from "next/link";
import d from "./download.svg";
import Image from "next/image";
const Person2 = (props) => (
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        padding: 16,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div className={styles.text}>{props.title}</div>
        <div className={styles.job}>{props.job}</div>
      </div>
      <div style={{ cursor: "pointer", alignSelf: "center" }}>
        <Image src={d} width={16} height={16} alt="" />
      </div>
    </div>
  </div>
);

export default Person2;
