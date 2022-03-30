import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./index.module.scss";
import Resturant from "../../components/Resturant/Game";
const index = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={"nav-top " + styles.title}>
          <h1>المطاعم والاماكن العامة</h1>
        </div>
        <div className={styles.newsGrid}>
          <Resturant title="mewo" href="/resturants/2" />
          <Resturant title="mewo" href="/resturants/2" />
          <Resturant title="mewo" href="/resturants/2" />
          <Resturant title="mewo" href="/resturants/2" />
          <Resturant title="mewo" href="/resturants/2" />
          <Resturant title="mewo" href="/resturants/2" />
        </div>
      </div>
    </div>
  );
};

export default index;
