import React from "react";
import Button from "../Button/Button";
import styles from "./New.module.scss";
import Link from "next/link";
import moment from "moment";
const New = ({ image, title, date, id }) => {
  return (
    <div className={styles.new}>
      <div className={styles.newImage}>
        <img src={image} />
      </div>
      <div className={styles.newBody}>
        <div className={styles.newDate}>
          {moment(date).format("DD/MM/YYYY")}
        </div>
        <p className={styles.newTitle}>{title}</p>

        <Button>
          <Link href={`/news/${id}`}>المزيد</Link>
        </Button>
      </div>
    </div>
  );
};

export default New;
