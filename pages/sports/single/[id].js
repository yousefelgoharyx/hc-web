import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Person from "../../../components/Person/Person";
import styles from "../index.module.scss";
const newItem = () => {
  const { query } = useRouter();

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>كرة القدم</h1>
          <div>{JSON.stringify(query)}</div>
        </div>
        <div className={styles.pcontainer}>
          <div>
            <div className={styles.subtitle}>
              <h3>الجهاز الفني والاداري</h3>
            </div>

            <div className={styles.newsGrid}>
              <Person job="مدير" title="باسم طارق" />
              <Person job="مدير" title="باسم طارق" />
              <Person job="مدير" title="باسم طارق" />
              <Person job="مدير" title="باسم طارق" />
            </div>
          </div>

          <div>
            <div className={styles.subtitle}>
              <h3>اللاعبين</h3>
            </div>

            <div className={styles.newsGrid}>
              <Person title="باسم طارق" />
              <Person title="باسم طارق" />
              <Person title="باسم طارق" />
              <Person title="باسم طارق" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newItem;
